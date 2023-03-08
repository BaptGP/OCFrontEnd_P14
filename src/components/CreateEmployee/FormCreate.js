import { useState } from "react";
import { Select } from "react_select_ocp14";
import { Modal } from "react_modal_ocpenclassrooms_14";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import store from "../../app/store";
import { create } from "../../features/userSlice";
import { stateList } from "./StateList";

import "react-datepicker/dist/react-datepicker.css";

const array = [
  {
    value: "sales",
    title: "Sales",
  },
  {
    value: "marketing",
    title: "Marketing",
  },
  {
    value: "engineering",
    title: "Engineering",
  },
  {
    value: "human ressources",
    title: "Human Ressources",
  },
  {
    value: "legal",
    title: "Legal",
  },
];

const FormCreate = () => {
  const [active, setActive] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [birthDate, setBirthDate] = useState(new Date());
  const [firstName, setFirstName] = useState(null);
  const [street, setStreet] = useState(null);
  const [city, setCity] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [zipCode, setZipCode] = useState(null);
  const [state, setState] = useState(stateList[0].title)
  const [department, setDepartment] = useState(array[0].title)

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      name: {
        firstName: firstName,
        lastName: lastName,
      },
      street: street,
      city: city,
      zipCode: zipCode,
      startDate: new Date(startDate).toISOString().slice(0, 10),
      birth: new Date(birthDate).toISOString().slice(0, 10),
      department: department,
      state: stateList.filter(item => item.value === state)[0].title
    };
    store.dispatch(create(user));
    setActive(false);
  };
  return (
    <main>
      <div className="w-full flex justify-end p-8">
        <button
          onClick={() => setActive(true)}
          className="bg-[#93AD18] w-12 h-12 rounded-full"
        >
          <div className="flex items-center justify-center">
            <FontAwesomeIcon icon={faPlus} className="text-xl" />
          </div>
        </button>
      </div>
      {active && (
        <Modal isActive={active} setActive={setActive}>
          <h2 className="font-bold text-2xl flex justify-center mb-8">
            Create Employee
          </h2>
          <form action="" method="get" class="" onSubmit={handleSubmit}>
            <div className="flex flex-row w-full">
              <div class="flex flex-col w-1/2">
                <label for="firstname" className="font-bold">
                  FirstName
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="py-4 px-2 border-slate-400 border-2 rounded-lg"
                  placeholder="FirstName"
                />
              </div>
              <div class="flex flex-col w-1/2 ml-8">
                <label for="lastname" className="font-bold">
                  LastName
                </label>
                <input
                  type="text"
                  name="lastname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  id="lastname"
                  required
                  className="py-4 px-2 border-slate-400 border-2 rounded-lg"
                  placeholder="FirstName"
                />
              </div>
            </div>
            <div className="mt-2">
              <span className="font-bold">Date of Birth</span>
              <DatePicker
                selected={birthDate}
                onChange={(date) => setBirthDate(date)}
                className="py-4 px-2 border-slate-400 border-2 rounded-lg"
              />
            </div>
            <div className="mt-2">
              <span className="font-bold">Start Date</span>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="py-4 px-2 border-slate-400 border-2 rounded-lg"
              />
            </div>

            <div className="p-4 border-2 border-slate-600 rounded-lg mt-4">
              <h4 className="font-bold text-lg">Address</h4>
              <div className="flex flex-row w-full mt-2">
                <div class="flex flex-col w-1/3">
                  <label for="street" className="font-bold">
                    Street
                  </label>
                  <input
                    type="text"
                    name="street"
                    id="street"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    required
                    className="py-4 px-2 border-slate-400 border-2 rounded-lg"
                    placeholder="Street"
                  />
                </div>
                <div class="flex flex-col w-1/3 mx-4">
                  <label for="city" className="font-bold">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    id="city"
                    required
                    className="py-4 px-2 border-slate-400 border-2 rounded-lg"
                    placeholder="City"
                  />
                </div>
                <div className="w-1/3">
                  <Select
                    options={stateList}
                    label="state"
                    title="State"
                    onChangeValue={setState}
                    stateValue={state}
                    selectStyle={{
                      padding: "1.125rem",
                      borderColor: "rgb(148 163 184)",
                      borderWidth: 2,
                      borderRadius: "0.5rem",
                      backgroundColor: "white",
                    }}
                    labelStyle={{ fontWeight: "bold" }}
                  />
                </div>
              </div>
              <div class="flex flex-col mt-2">
                <label for="zipcode" className="font-bold">
                  Zip Code
                </label>
                <input
                  type="text"
                  name="zipcode"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  id="zipcode"
                  required
                  className="py-4 px-2 border-slate-400 border-2 rounded-lg"
                  placeholder="Zip Code"
                />
              </div>
              <Select
                options={array}
                label="department"
                title="Department"
                onChangeValue={setDepartment}
                stateValue={department}
                selectStyle={{
                  padding: "1.125rem",
                  borderColor: "rgb(148 163 184)",
                  borderWidth: 2,
                  borderRadius: "0.5rem",
                  backgroundColor: "white",
                }}
                labelStyle={{ fontWeight: "bold" }}
                componentStyle={{ marginTop: "0.5rem" }}
              />
            </div>
            <div class="bg-[#93AD18] w-full rounded-lg flex justify-center items-center h-12 mt-8 cursor-pointer">
              <input
                type="submit"
                value="Save"
                // onClick={() => setActive(false)}
                className="w-full font-bold h-full cursor-pointer"
              />
            </div>
          </form>
        </Modal>
      )}
    </main>
  );
};

export default FormCreate;
