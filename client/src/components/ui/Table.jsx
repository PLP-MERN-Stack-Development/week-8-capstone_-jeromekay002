const tenants = [
  { name: 'Alice', property: 'Sunset Villa', contact: '0712345678' },
  { name: 'Brian', property: 'Garden Heights', contact: '0798765432' },
];

export default function Table() {
  return (
    <div className="bg-white rounded shadow overflow-x-auto">
      <table className="w-full table-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Tenant</th>
            <th className="p-3 text-left">Property</th>
            <th className="p-3 text-left">Contact</th>
          </tr>
        </thead>
        <tbody>
          {tenants.map((tenant, i) => (
            <tr key={i} className="border-t">
              <td className="p-3">{tenant.name}</td>
              <td className="p-3">{tenant.property}</td>
              <td className="p-3">{tenant.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
