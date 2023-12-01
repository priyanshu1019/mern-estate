import React from "react";

export const CreateListing = () => {
  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">
        Create a Listing
      </h1>
      <form className=" flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            placeholder="Name"
            id="name"
            maxLength="62"
            minLength="10"
            required
            className="rounded-lg border p-3"
          />
          <textarea
            type="text"
            placeholder="Description"
            id="description"
            required
            className="rounded-lg border p-3"
          />
          <input
            type="text"
            placeholder="Address"
            id="address"
            required
            className="rounded-lg border p-3"
          />
          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-2">
              <input type="checkbox" id="sale" className="w-5" />
              <span> Sell</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="rent" className="w-5" />
              <span> Rent</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="parking" className="w-5" />
              <span> Parking Lot</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="furnished" className="w-5" />
              <span> Furnished</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="offer" className="w-5" />
              <span> Offer</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 ">
            <div className="flex items-center  gap-2">
              <input
                type="number"
                id="bedrooms"
                min="1"
                max="10"
                required
                className="rounded-lg border border-gray-300 p-3 w-14 "
              />
              <p>Beds</p>
            </div>
            <div className="flex items-center  gap-2">
              <input
                type="number"
                id="bathrooms"
                min="1"
                max="10"
                required
                className="rounded-lg border border-gray-300 p-3 w-14 "
              />
              <p>Baths</p>
            </div>
            <div className="flex items-center  gap-2">
              <input
                type="number"
                id="regularPrice"
                min="1"
                max="10"
                required
                className="rounded-lg border border-gray-300 p-3 w-14 "
              />
              <div className="flex flex-col items-center">
                <p>Regular Price</p>
                <span className="text-xs">($ / Month)</span>
              </div>
            </div>
            <div className="flex items-center  gap-2">
              <input
                type="number"
                id="discountPrice"
                min="1"
                max="10"
                required
                className="rounded-lg border border-gray-300 p-3 w-14 "
              />
              <div className="flex flex-col items-center">
                <p>Discount Price</p>
                <span className="text-xs">($ / Month)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <p className="font-semibold">
            Images:
            <span className="font-normal text-gray-600 ml-2">
              {" "}
              The First image will be the cover (max 6)
            </span>
          </p>
          <div className="flex gap-4">
            <input
              className="p-3 border bordergray-300 rounded w-full"
              type="file"
              id="images"
              accept="image/*"
              multiple
            />
            <button className="uppercase border border-green-700 p-3 rounded hover:shadow-lg disabled:opacity-80 ">
              Upload
            </button>
          </div>
          <button className="uppercase p-3 bg-slate-700 rounded-lg text-white">
            Create Listing
          </button>
        </div>
      </form>
    </main>
  );
};
