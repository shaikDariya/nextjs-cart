export const metadata = {
  title: 'Meta Information',
  description: 'Learning Meta data for SEO',
};

export default function () {
  return (
    <div>
      <p>Meta data Rule:</p>
      <p>
        Both `Layout.tsx` and `Page.tsx` can take metadata export.But it only
        work on server components. If we apply on layout it will work allpages.
        If we declare it on page level then it will work for only that page. The
        two ways to declare metadata is object and function. i) metadata. ii)
        generateMetadata function naming has to same
      </p>
      <p>
        `generateMetadata` Can be Async also. Make sure it will hold the page
        render untill this is resolved.
      </p>
      <p>About `title` prop. can be string| object</p>
      <p>Object with</p>
      <p>absolute: means that show default string.</p>
      <p>template: to show teamplate</p>
      <p>Example we want to show `%s Name`</p>
    </div>
  );
}
