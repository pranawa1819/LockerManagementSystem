import { useFormContext } from "react-hook-form";
import { districtsByProvince } from "../../constants/DistrictList-data";
import { useState } from "react";



function AddressDetails() {
  const [province, setProvince] = useState<string>();
  const [district, setDistrict] = useState<string>();
const {
     register,
     formState: { errors },
   } = useFormContext();

  const handleProvinceSelector = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const provinces = e.target.value;
    setProvince(provinces);
  };

  const handleDistrictSelector = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDistrict(e.target.value);
  };

  const selectedProvince = districtsByProvince.find(
    (c) => c.province === province
  )?.districts;

  return (
    <>
      <div className="w-full  flex justify-center items-center">
       
          <div className="w-md shadow-lg p-7  rounded-lg">
            <div className="text-[20px] text-center mb-5 font-bold">
              Currrent Address
            </div>
            <div className="flex flex-col justify-center  w-full  rounded">
              <label className="block text-gray-700 font-medium mb-1">
                PROVINCE
              </label>
              <select
                className="w-full border border-gray-300 rounded-lg p-2  outline-none text-gray-400"
                {...register("province")}
                value={province}
                onChange={handleProvinceSelector}
                
              >
                <option value="">Select Province</option>
                {districtsByProvince.map((p, index) => (
                  <option key={index} value={p.province}>
                    {p.province}
                  </option>
                ))}
              </select>
              <p className="text-[12px] text-red-500 mb-5">{errors.province?.message}</p>

              <label className="block text-gray-700 font-medium mb-1">
                DISTRICT
              </label>
              <select
               {...register("district")}
                className="w-full border border-gray-300 rounded-lg p-2 outline-none text-gray-400 "
                onChange={handleDistrictSelector}
                value={district}
              >
                <option value="">District</option>
                {selectedProvince?.map((d, index) => (
                  <option key={index}>{d}</option>
                ))}
              </select>
               <p className="text-[12px] text-red-500 mb-5">{errors.district?.message}</p>
               <label className="block text-gray-700 font-medium mb-1">
                MUNICIPALITY
              </label>
              <input
                type="text"
                placeholder="Enter municipality"
                {...register("municipality")}
                className="w-full border border-gray-300 rounded-lg p-2  outline-none "
              />
              <p className="text-[12px] text-red-500 mb-5">{errors.municipality?.message}</p>

              <label className="block text-gray-700 font-medium mb-1">
                TOLE
              </label>
              <input
                type="text"
                placeholder="Enter tole"
                {...register("tole")}
                className="w-full border border-gray-300 rounded-lg p-2  outline-none "
              />
              <p className="text-[12px] text-red-500 mb-5">{errors.tole?.message}</p>

              <label className="block text-gray-700 font-medium mb-1">
                WARD NUMBER
              </label>
              <input
                type="number"
                placeholder="Enter ward number"
                {...register("ward")}
                className="w-full border border-gray-300 rounded-lg p-2  outline-none "
              />
              <p className="text-[12px] text-red-500 mb-5">{errors.ward?.message}</p>
            </div>
          </div>
        
      </div>
    </>
  );
}

export default AddressDetails;
