import { redirect } from "next/navigation";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import Link from "next/link";

export default async function Debug() {
  // Dev only
  if (process.env.NODE_ENV !== "development") redirect("/");

  const session = (await getServerSession(authOptions)) as Session | null;

  const renderValue = (value: any) => {
    if (Array.isArray(value)) {
      // Handle arrays with a nested table
      return (
        <table className="table-auto border-collapse border border-gray-300 w-full mt-2">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Index</th>
              <th className="border border-gray-300 px-4 py-2">Value</th>
            </tr>
          </thead>
          <tbody>
            {value.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{index}</td>
                <td className="border border-gray-300 px-4 py-2 break-all">{renderValue(item)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else if (typeof value === "object" && value !== null) {
      // Handle objects with a nested table
      return (
        <table className="table-auto border-collapse border border-gray-300 w-full mt-2">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Key</th>
              <th className="border border-gray-300 px-4 py-2">Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(value).map(([key, val]) => (
              <tr key={key}>
                <td className="border border-gray-300 px-4 py-2">{key}</td>
                <td className="border border-gray-300 px-4 py-2 break-all">{renderValue(val)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
    // Render other types (e.g., strings, numbers)
    return String(value);
  };

  return (
    <section className="p-5 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <p>Debug: {process.env.NODE_ENV}</p>
        <Link href="/" className="underline" target="_blank">Go to Home</Link>
      </div>

      <div>
        <p>Session Variables</p>
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Key</th>
              <th className="border border-gray-300 px-4 py-2">Value</th>
            </tr>
          </thead>
          <tbody>
            {session &&
              Object.entries(session).map(([key, value]) => (
                <tr key={key}>
                  <td className="border border-gray-300 px-4 py-2">{key}</td>
                  <td className="border border-gray-300 px-4 py-2 break-all">
                    {renderValue(value)}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div>
        <p>Environment Variables</p>
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Key</th>
              <th className="border border-gray-300 px-4 py-2">Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(process.env).map(([key, value]) => (
              <tr key={key}>
                <td className="border border-gray-300 px-4 py-2">{key}</td>
                <td className="border border-gray-300 px-4 py-2 break-all">
                  {renderValue(value)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
