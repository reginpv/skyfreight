import TemplateDefault from "@/components/templates/Default"
import { getServerSession, Session } from "next-auth"
import { authOptions } from "@/lib/authOptions"

export default async function Home() {

  const session = await getServerSession(authOptions) as Session | null

  return (
    <TemplateDefault>
      <section>
        <div className="container container--custom">
          <div>
            <div>{JSON.stringify(session)}</div>
            <div>Home</div>
          </div>
        </div>
      </section>
    </TemplateDefault>
  );
}
