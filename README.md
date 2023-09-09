# Sabad
# Full Stack E-Commerce website with Admin panel





### Install all packages

```shell
npm i
```

### Setup .env file for run

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

DATABASE_URL=''
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
STRIPE_API_KEY=
FRONTEND_STORE_URL=http://localhost:3001
STRIPE_WEBHOOK_SECRET=
```

### Connect to SQLite and Push Prisma

```shell
npx prisma generate
npx prisma db push
```


###  Prisma and DB managing

```shell
npx prisma migrate dev --prewiew-feature
npx prisma migrate reset
npx prisma studio
```


### Start the app

```shell
npm run dev
```

