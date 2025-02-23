import { useContext, useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/topbar/TopBar";
import "./settings.css";
import { AuthContext } from "../../context/AuthContext";
import { updateUser } from "../../context/AuthActions";
import { useNavigate } from "react-router-dom";

function Settings() {
  const { user, dispatch } = useContext(AuthContext);
  const navigator = useNavigate();

  const [formData, setFormData] = useState({
    username: user.username || "",
    city: user.city || "",
    relationship: user.relationship || "",
    coverPic: user.coverPic || "",
    profilePic: user.profilePic || "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [changes, setChanges] = useState({}); // Track changes

  // Track changes in form data
  useEffect(() => {
    const changes = {};
    for (const key in formData) {
      if (formData[key] !== user[key]) {
        changes[key] = formData[key];
      }
    }
    setChanges(changes);
  }, [formData, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    setFormData((prev) => ({
      ...prev,
      [type]: file, // Store the file object temporarily
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (Object.keys(changes).length === 0) {
      setLoading(false);
      setError("No changes detected.");
      return;
    }

    try {
      const updatedData = { ...changes, userId: user._id }; // Only send changed fields

      // Upload profile picture if changed
      if (formData.profilePic instanceof File) {
        const profilePicFormData = new FormData();
        profilePicFormData.append("file", formData.profilePic);

        const profilePicRes = await axios.post(
          `${import.meta.env.VITE_SERVER_URL}/upload`,
          profilePicFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        updatedData.profilePic = profilePicRes.data.url;
      }

      // Upload cover photo if changed
      if (formData.coverPic instanceof File) {
        const coverPicFormData = new FormData();
        coverPicFormData.append("file", formData.coverPic);

        const coverPicRes = await axios.post(
          `${import.meta.env.VITE_SERVER_URL}/upload`,
          coverPicFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        updatedData.coverPic = coverPicRes.data.url;
      }

      if (changes) {
        // Send updated data to the backend
        const res = await axios.put(
          `${import.meta.env.VITE_SERVER_URL}/api/users/${user._id}`,
          updatedData
        );

        console.log(res);

        if (res.status === 200) {
          dispatch(updateUser(res.data));
          setChanges({});
          navigator("/");
        } else {
          setError("Failed to update settings");
        }
      }
    } catch (err) {
      setError("Failed to update settings");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <TopBar />
      <div className="settings">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="settingsWrapper">
          <h1>User Settings</h1>
          <form onSubmit={handleSubmit}>
            <div className="formGroup">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
              />
            </div>
            <div className="formGroup">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
              />
            </div>
            <div className="formGroup">
              <label>Relationship Status</label>
              <select
                name="relationship"
                value={formData.relationship}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Single">Single</option>
                <option value="In a relationship">In a relationship</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
              </select>
            </div>
            <div className="formGroup">
              <label>Profile Picture</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "profilePic")}
              />
            </div>
            <div className="formGroup">
              <label>Cover Photo</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "coverPic")}
              />
            </div>
            <button type="submit" disabled={loading}>
              {loading ? "Updating..." : "Update Settings"}
            </button>
            {error && (
              <p
                className={error.includes("successfully") ? "success" : "error"}
              >
                {error}
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Settings;
