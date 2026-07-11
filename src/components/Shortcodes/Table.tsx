interface TableProps {
  headers: string[];
  rows: string[][];
  striped?: boolean;
}

export default function Table({
  headers,
  rows,
  striped = false,
}: TableProps) {
  const wrapClasses = [
    'sc_table',
    striped ? 'sc_table_striped' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapClasses}>
      <table className="sc_table_content">
        <thead className="sc_table_head">
          <tr className="sc_table_row sc_table_row_head">
            {headers.map((header, idx) => (
              <th key={idx} className="sc_table_cell sc_table_cell_head">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="sc_table_body">
          {rows.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              className={`sc_table_row sc_table_row_body${
                striped && rowIdx % 2 === 1 ? ' sc_table_row_odd' : ''
              }`}
            >
              {row.map((cell, cellIdx) => (
                <td key={cellIdx} className="sc_table_cell sc_table_cell_body">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
