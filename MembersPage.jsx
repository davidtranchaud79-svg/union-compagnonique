import { useEffect, useState } from "react";
import UCTable from "../../components/ui/Card";
import { api } from "../../services/api";

export default function MembersPage() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    api.listMembers().then(res => {
      if (res.ok && Array.isArray(res.data)) setRows(res.data);
      else setRows([]);
    });
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="font-title text-2xl">Membres</h1>
      <pre>{JSON.stringify(rows,null,2)}</pre>
    </div>
  );
}