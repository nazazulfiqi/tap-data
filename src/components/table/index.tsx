import React, { ReactNode, useState, ReactElement } from "react";

export interface TableColumn {
  header: string;
  sort_by?: string | undefined;
  colspan?: number;
  className?: string;
  hasSorting?: boolean;
  hasAllSelect?: boolean;
}

interface SubTableProps {
  columns: TableColumn[];
  classBody: string;
  children: ReactNode;
  SubTableShort: (header: string) => void; // Fungsi penanganan pengurutan
  classHead: string;
  SelectAll?: () => void;
}

export const SubTable: React.FC<SubTableProps> = ({
  columns,
  classBody,
  SubTableShort,
  children,
  classHead,
  SelectAll,
}) => {
  const ChildrenSubTable = React.Children.toArray(children);

  return (
    <table className="table-auto p-20 w-full text-[12px]">
      <thead>
        <tr className={`${classHead}`}>
          {columns.map((column, index) => (
            <th
              key={index}
              colSpan={column.colspan || 1}
              className={`px-4 py-4  ${column.className}`}
            >
              <div className="flex justify-center items-center gap-4">
                {column.header}
                {column.hasSorting && (
                  <button onClick={() => SubTableShort(column.header)}>
                    <svg
                      width="8"
                      height="12"
                      viewBox="0 0 8 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.47015 0.970306C3.76312 0.677338 4.2389 0.677338 4.53187 0.970306L7.53187 3.97031C7.7475 4.18593 7.81078 4.50703 7.69359 4.78827C7.5764 5.06952 7.30453 5.25234 6.99984 5.25234H0.99984C0.697496 5.25234 0.423277 5.06952 0.30609 4.78827C0.188902 4.50703 0.254527 4.18593 0.467809 3.97031L3.46781 0.970306H3.47015ZM3.47015 11.032L0.470152 8.03203C0.254527 7.8164 0.191246 7.49531 0.308434 7.21406C0.425621 6.93281 0.697496 6.74999 1.00218 6.74999H6.99984C7.30218 6.74999 7.5764 6.93281 7.69359 7.21406C7.81078 7.49531 7.74515 7.8164 7.53187 8.03203L4.53187 11.032C4.2389 11.325 3.76312 11.325 3.47015 11.032Z"
                        fill="#737373"
                      />
                    </svg>
                  </button>
                )}
                {column.hasAllSelect && <input type="checkbox" onChange={SelectAll} />}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={classBody}>{ChildrenSubTable}</tbody>
    </table>
  );
};

interface TableProps {
  columns: TableColumn[];
  children: ReactNode;
  classHead: string;
  classBody: string;
  MainTableSort?: (header: string) => void; // Menambahkan properti onSort
}

export const ReusableTable: React.FC<TableProps> = ({
  columns,
  children,
  classHead,
  classBody,
  MainTableSort,
}) => {
  const ChildreenMainTable = React.Children.toArray(children);
  return (
    <table className="table-auto w-full text-[12px]">
      <thead className={`w-full ${classHead}`}>
        <tr>
          {columns.map((column, index) => (
            <th
              key={index}
              colSpan={column.colspan || 1}
              className={`px-4 py-4  ${column.className}`}
            >
              <div className="flex justify-center items-center gap-4">
                {column.header}
                {column.hasSorting && (
                  <button
                    onClick={() => column.sort_by && MainTableSort && MainTableSort(column.sort_by)}
                  >
                    <svg
                      width="8"
                      height="12"
                      viewBox="0 0 8 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.47015 0.970306C3.76312 0.677338 4.2389 0.677338 4.53187 0.970306L7.53187 3.97031C7.7475 4.18593 7.81078 4.50703 7.69359 4.78827C7.5764 5.06952 7.30453 5.25234 6.99984 5.25234H0.99984C0.697496 5.25234 0.423277 5.06952 0.30609 4.78827C0.188902 4.50703 0.254527 4.18593 0.467809 3.97031L3.46781 0.970306H3.47015ZM3.47015 11.032L0.470152 8.03203C0.254527 7.8164 0.191246 7.49531 0.308434 7.21406C0.425621 6.93281 0.697496 6.74999 1.00218 6.74999H6.99984C7.30218 6.74999 7.5764 6.93281 7.69359 7.21406C7.81078 7.49531 7.74515 7.8164 7.53187 8.03203L4.53187 11.032C4.2389 11.325 3.76312 11.325 3.47015 11.032Z"
                        fill="#737373"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={`${classBody}`}>{ChildreenMainTable}</tbody>
    </table>
  );
};

export const renderedHasil = (hasil: string) => {
  if (hasil === "SANGAT BAIK") {
    return (
      <button className="w-full py-2 text-white font-bold text-[12px] rounded-md bg-[#a0ff81]">
        {hasil}
      </button>
    );
  } else if (hasil === "BAIK") {
    return (
      <button className="w-full py-2 text-white font-bold text-[12px] rounded-md bg-[#54B435]">
        {hasil}
      </button>
    );
  } else if (hasil === "CUKUP BAIK") {
    return (
      <button className="w-full py-2 text-white font-bold text-[12px] rounded-md bg-[#F59E0B]">
        {hasil}
      </button>
    );
  } else {
    return (
      <button className="w-full py-2 text-white font-bold text-[12px] rounded-md bg-[#EE2D24]">
        {hasil}
      </button>
    );
  }
};
