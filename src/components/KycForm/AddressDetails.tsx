import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { districtsByProvince } from "../../constants/DistrictList-data";
import { useState } from "react";
import { AddressDetailsSchema } from "../../constants/AddressDetails.zod";

type FormValues = z.infer<typeof AddressDetailsSchema>;
function AddressDetails() {
  const [province, setProvince] = useState<string>();
  const [district, setDistrict] = useState<string>();
  const form = useForm<FormValues>({
    resolver: zodResolver(AddressDetailsSchema),
  });
  const { register, formState, handleSubmit } = form;
  const navigate = useNavigate();
  const onsubmit = () => {
    navigate("/document-details");
  };
  const { errors } = formState;

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
        <form onSubmit={handleSubmit(onsubmit)}>
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
                Tole
              </label>
              <input
                type="text"
                placeholder="Enter tole"
                {...register("tole")}
                className="w-full border border-gray-300 rounded-lg p-2  outline-none "
              />
              <p className="text-[12px] text-red-500 mb-5">{errors.tole?.message}</p>

              <label className="block text-gray-700 font-medium mb-1">
                Ward Number
              </label>
              <input
                type="number"
                placeholder="Enter ward number"
                {...register("ward")}
                className="w-full border border-gray-300 rounded-lg p-2  outline-none "
              />
              <p className="text-[12px] text-red-500 mb-5">{errors.ward?.message}</p>

              <button className="bg-[#47446a] text-white px-8 py-3 text-lg transition-all duration-300" >
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddressDetails;
