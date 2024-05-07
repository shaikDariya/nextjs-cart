### App Routing is introduced in next.13.

Which is called file based routing inside app folder. It auto create routing when a folder has `page.tsx` file we don't need to declare routing.

To Provide Links we can use
`import Link from next/Link`;
`<Link href="full-path">Path Name</Link>`

### Dynamic Routing.

`Producs` Predefined Route and Product details should be dynamic.

`[paramIdentifierName]` will make this folder as dynamic route.
For dynamic route components params property will be added to props. That contain paramIdentifierName.

Nested Dynamic routes will have parent dynamic paramIdentifierName. Example prodcust/${prodcutId}/reviews/${reviewId}
Then params object contain prodcutId, reviewId values also in that params object.

### Catch all Segements.

Lets take example docs all nested routes I want to use same layout I dont need to create n nested components.

`[...slug]` so all paths under doc will handle here.

Finally when the path is not found then it will look for root `not-found.tsx` to show it.

When we call notFound manually then it look for nearest `not-found.tsx` to show
`import { notFound } from 'next/navigation';`

Private Routes, Route groups.

Private folder (Prefix with \_(underscore)) then it will not loaded in part of file based routing. Routing will ignore this underscore routes.

When we want to group routes and want to not include that as parent route. we can use () this will omit that folder name from path.

(routing)/about. Then it will be avilable /about in browser.

Root Layout -> Nested Layout.

About Naivigation please refer navigation under routing.

Layout&Template -> Please reffer app/routing/layout.

As like not-found.tsx we can show `loading.tsx`.

### Error handling.

`error.tsx` when the react render throw error this will handle error.tsx it should be client component.
