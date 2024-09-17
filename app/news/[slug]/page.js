export default function News({params}){
  return(
    <>
      <h1>News Detail Page</h1>
      <p>This is the {params.slug} page</p>
    </>
  );
}