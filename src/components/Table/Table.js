import MaterialReactTable from "material-react-table";
import React, { useMemo } from "react";
import { selectState } from "../../features/userSlice";
import { useSelector } from "react-redux";

const Table = () => {
  const state = useSelector(selectState);

  const columns = useMemo(
    () => [
      {
        accessorKey: "name.firstName", //access nested data with dot notation

        header: "First Name",
      },

      {
        accessorKey: "name.lastName",

        header: "Last Name",
      },

      {
        accessorKey: "startDate", //normal accessorKey

        header: "Start Date",
      },

      {
        accessorKey: "department",

        header: "Department",
      },

      {
        accessorKey: "birth",

        header: "Date of Birth",
      },

      {
        accessorKey: "street",

        header: "Street",
      },

      {
        accessorKey: "city",

        header: "City",
      },
      {
        accessorKey: "state",

        header: "State",
      },
      {
        accessorKey: "zipCode",

        header: "Zip Code",
      },
    ],

    []
  );
  return <MaterialReactTable columns={columns} data={state} />;
};

export default Table;
