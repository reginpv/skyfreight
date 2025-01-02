# Sky Freight Oman

NOTE:
- You need to override build script in `Vercel` to `prisma generate && next build` or build will fail. (Not sure if this is connected to using Vercel Postgres and NextAuth, Prisma)

Services

Service type:
1. Air 
2. Sea
3. Others

Service status:
1. Published
2. Unpublished

Order status:
1. Pending
2. Paid
3. Shipped
4. Cancelled