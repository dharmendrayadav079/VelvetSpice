import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
useEffect(() => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    },
    (error) => {
      console.error("Geolocation error:", error.message);
    }
  );
}, []);


  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [addressData, setAddressData] = useState({
    addressType: "",
    state: "",
    city: "",
    fullAddress: "",
    pincode: "",
  });

  const handleUserChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleAddressChange = (e) => {
    setAddressData({ ...addressData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    const { firstName, lastName, email, mobile, password } = userData;
    if (!firstName || !lastName || !email || !mobile || !password) {
      alert("Please fill all personal information fields.");
      return;
    }
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { addressType, state, city, fullAddress, pincode } = addressData;
    if (!addressType || !state || !city || !fullAddress || !pincode) {
      alert("Please complete the address section.");
      return;
    }

    const finalData = {
      ...userData,
      address: addressData,
    };

    localStorage.setItem("signupData", JSON.stringify(finalData));
    alert("Signup successful! Address saved.");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
      <div className="w-full max-w-3xl bg-white shadow-md p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Signup Form</h2>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="firstName" placeholder="First Name" value={userData.firstName} onChange={handleUserChange} className="border p-2 rounded" />
              <input type="text" name="lastName" placeholder="Last Name" value={userData.lastName} onChange={handleUserChange} className="border p-2 rounded" />
              <input type="email" name="email" placeholder="Email" value={userData.email} onChange={handleUserChange} className="border p-2 rounded" />
              <input type="text" name="mobile" placeholder="Mobile Number" value={userData.mobile} onChange={handleUserChange} className="border p-2 rounded" />
              <input type="password" name="password" placeholder="Password" value={userData.password} onChange={handleUserChange} className="border p-2 rounded md:col-span-2" />
              <button type="button" onClick={handleNext} className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition md:col-span-2">Next → Address Info</button>
            </div>
          )}

          {step === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select name="addressType" value={addressData.addressType} onChange={handleAddressChange} className="border p-2 rounded md:col-span-2">
                <option value="">Select Address Type</option>
                <option value="Home">Home</option>
                <option value="Work">Work</option>
                <option value="Office">Office</option>
              </select>

              <input type="text" name="state" placeholder="State" value={addressData.state} onChange={handleAddressChange} className="border p-2 rounded" />
              <input type="text" name="city" placeholder="City" value={addressData.city} onChange={handleAddressChange} className="border p-2 rounded" />
              <input type="text" name="fullAddress" placeholder="House No., Street, Landmark" value={addressData.fullAddress} onChange={handleAddressChange} className="border p-2 rounded md:col-span-2" />
              <input type="text" name="pincode" placeholder="Pincode" value={addressData.pincode} onChange={handleAddressChange} className="border p-2 rounded" />

              <div className="flex gap-4 md:col-span-2">
                <button type="button" onClick={() => setStep(1)} className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500 w-full">← Back</button>
                <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 w-full">Submit & Register</button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;
