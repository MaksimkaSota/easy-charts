import type { FC, ReactElement } from 'react';
import classes from './Table.module.scss';

type PropsType = {
  tableValue: (string | number)[][];
};

export const Table: FC<PropsType> = ({ tableValue }): ReactElement => {
  return (
    <div className={classes.tableContainer}>
      <table className={classes.table}>
        <tbody>
          {tableValue.map(
            (rowValue: (string | number)[], rowIndex: number): ReactElement => (
              <tr className={classes.tr} key={rowIndex}>
                {rowValue.map((columnValue: string | number, columnIndex: number): ReactElement => {
                  return rowIndex === 0 || columnIndex === 0 ? (
                    <th className={classes.th} key={columnIndex}>
                      {columnValue}
                    </th>
                  ) : (
                    <td className={classes.td} key={columnIndex}>
                      {columnValue}
                    </td>
                  );
                })}
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};
