import { IAdminAccount } from "@/utils";
import { FC, ReactElement } from "react";
import { TableBody } from "./TableBody";

const TABLE_HEAD = ["Checkbox", "Name", "Username", "Password", "Role", "Action"];

type T = {
  data: IAdminAccount[];
  checkbox: string[];
  handleCheckbox: (id: string) => void;
  setSelectedData: (data: IAdminAccount) => void;
};

export const Table: FC<T> = ({ data, checkbox, handleCheckbox, setSelectedData }): ReactElement => {
  return (
    <section className="overflow-hidden rounded-lg border border-N2">
      <div className="max-h-[74vh] overflow-auto">
        <table className="w-full">
          <thead className="sticky top-0 z-10 bg-N2">
            <tr className="text-center">
              {TABLE_HEAD.map((label, index) => (
                <th key={index} className="px-4 py-4">
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map((account, index) => (
              <TableBody
                key={index}
                account={account}
                index={index}
                checkbox={checkbox}
                handleCheckbox={handleCheckbox}
                setSelectedData={setSelectedData}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};