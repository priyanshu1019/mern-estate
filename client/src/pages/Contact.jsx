/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Contact = ({ listing }) => {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");
  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        if (data.success === false) {
          return;
        }
        setLandlord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);
  const onChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div>
      {landlord && (
        <div className="flex flex-col gap-2">
          <p>
            Contact <span className="font-semibold">{landlord.username}</span>{" "}
            for{" "}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            name="message"
            id="message"
            rows="2"
            value={message}
            placeholder="Enter your message here..."
            onChange={onChange}
            className="w-full border-2 border-gray-300 rounded-lg "
          ></textarea>
          <Link
            to={`mailto:${landlord.email} ? subject= Regarding${listing.name} &body=${message}`}
            className="bg-slate-700 text-white w-32 px-3 py-2 rounded-lg text-center hover:opacity-95"
          >
            Send Message
          </Link>
        </div>
      )}
    </div>
  );
};
