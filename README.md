### Next.js

Why Next.js.
React is a library for building user interfaces.This responsible for only view layer of application.
You need to make decision about other features like routing, data fetching and more.

Next.js
It uses react for building user interfaces.
Provide additional features that enable you to build production-ready applications.

1. Routing. (app/routing).
   Complex-routing(app/complex-dashboard).
2. Api Routes.
3. Rendering.
4. Data Fetching.
5. Inbuild Styling suppport.
6. Optimization
7. Dev and Prod build system.

You don't need to install additional packages as it's provides everything you need.

### Next.JS (13).

i) Server Components(Earlier By Default all client components).
ii) (Project Directory).
Page Routing/Api Routing.
layout.tsx(Start of application. And it's server component earlier it's client).
/app/dashboard/page.tsx (Route1 /dashboard).
/app/team/page.tsx (Route2 /team).
/app/api/team/route.ts (Api /api/team)
iii) Data fetching.
In 13v Datafecthing make easy because of server components. (Earlier we need to use SSR functions like getServerSideProps).
The introduction of server components allows us to create and use ordinary async-await functions like getData, which we can then call in our Dashboard component. There are zero props involved

### Next.js (14)

i) Support for React Native.
ii) Built-in image optimizer.
iii) Performance improvements: Incremental static regeneration (ISR)
iv) Next.js CLI

### Rendering:

### Hydration:

On server side rendering inital HTML code with JS refrences loaded. Now the Page is not interactive it loads JS files.Then React procedes to bind the necessary Javascript logic to these elements.This involves initalizing state , attaching handlers for actions and setting up for dynamic functionalites.

Server Side Solutions:
i) SSG
ii) SSR

SSR was a significant improvment over Client Side rendeing providing faster inital page load and better SEO.

Drawbacks of SSR:
i) Data fetching must be completed to render HTML.
ii) The javascript required for the component to fully loaded on client side to start hydration process.
iii) You have to hydrate everything to interact with anything.

To Overcome this React 18 introduce Suspense architecture to unlock two major SSR features.

1. HTML streaming on server. (You Don't have to fetch every thing before you show everything.)
   We can wrap in suspense so it will show fallback untill it not ready for render. And It's enable selective hydration. So that the other parts are ready for interaction.
2. Selective Hydration on the client.
   Priority of hydration is if user clicks on Component then react will do hydration first then rest do later.

Drawbacks of Suspense SSR:

- Increase bundle sizes leading to excessive downloads to user.
- Unnessary hydration delaying interactivity.
- Extensive client side processing that could result in poor perfomance.

React Server Components.(RSC) It's introduced by react team to have Dual component model.

- Client Side Component.
- Server Side Component.

Client side component are rendered on Client side rendering but they can also be renderd to HTML on the server (SSR). Components that run client but can also be executed once on the server as on optimization strategy.

React Server Component (RSC).
A new type of React components specially designed to operate on server.

- It reduce bundle size because it's not part of build. Additonaly it removes hydration step, speeding up and interaction.
- Direct access to server side resources.
- Enhance Security by keeping sensitive data from the client side.
- Improved Data fetching efficieny.
- Improved SEO (The Server rendered HTMl is fully accessible to search engine bots.)
- Efficeint Streaming.

RSC Rendering Life cycle.

Browser ->(request) Next.js (match Server component) -> React(render SC tree+ prepare Child component).

React.js return special json format which is retundered back to next.js RSC payload. Then Nex.js generateHTML and send to streamed HTML to browser.

Refetch -> next.js -> React (SC tree+ prepa)
<- RSC Payload
<- RSC Payload

On Client side react reconcilation with RSC payload and update UI

Static Rendering(Prod Vs Dev mode).
In Dev Mode every request make page re-rendered.
In Prod -> A page is pre-rendered once when we run build command.

Prefetching Technique: Is Preload a route in the background before the user navigates. So it load all routes that are visible on the view port. (For Example the routes visible while scrolling then we load it start prefetching).

(https://youtu.be/-7Rrjy-lfcE)

4. Dynamic Rendering.
   When your server components use cookies(), headers(), searchParams(). Then Next.js make this page as dynamically rendering so it will not genreted at build time.
   (https://youtu.be/-7Rrjy-lfcE)

5. Streaming.

Streaming is Integrated into the Next.js App Router by default. To Achive this we just wrap the Components inside Suspense.

For Example.
function App() {
retrun (
<>

<p>Basic Element</p>
<Suspense>
<Product />
</Suspense>
<Suspense>
<Suggestions />
</Suspense>
</>  
 )
}
(https://youtu.be/9REGGiU8hck)

#### Server Component Patterns.

## Server Only Code.(https://youtu.be/t2tNpubt4y0)

Certian code is intended to execute only on client side and should n't be part of client build. When we use `import "server-only"`. Then it will convert that to use it only on server components and thro build error if use this in client component.

Server only best uses to store secret keys and database-quires ans sensitive business logic. It's crucial to seperate server only code from client-code to protect the application security and integrity.

### ThirdPary Npm Packages(https://youtu.be/I4w5uZzdT1A).

We can't use 3rd party packes in server components directly we need to wrap it as client components ans then we use it inside Server components.

### Context-Provider.(https://youtu.be/Ou2IAs7W1Ig)

We can create Context api we can use it inside layout component to share data between client components. And we need to convert `layout.tsx` as client component.

Make sure when you convert server component to client component we should remove metaData. It's only used in server component.
`Both static and dynamic metadata through generateMetadata are only supported in Server Components.`

#### Client Component Patterns.

## Client-only Code.()

Client only code typically inetracts with browser-specific features like DOM, the window object, localStorage etc which is not available on server. `import client-only`. Then it will throw build error when using client-only on server components.

## Client Component Placement.(https://youtu.be/MdpoBLCDmJo)

If we make any client component all it's child componet automatically become Client component. For better perfomance we should use as low as low level node as client component ideally making them leaf component.

#### Interleaving Server and Client Components.(https://youtu.be/-RRiLnKSj8k)

All Client Component can be used inside Server components & Client component. But server component can't use inside client side componet directly. We can wrap the server component as children to that and then only we can use it in side clinet. Hence here chilren is unknow so that it allow dynamic children that can be server component.
