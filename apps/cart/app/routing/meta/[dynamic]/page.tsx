import { Metadata } from 'next';

type Props = {
  params: {
    dynamic: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  //It will hold entire rendering page
  await new Promise((res) => setTimeout(res, 10000));
  const time = Date.now();
  return {
    title: `Title ${params.dynamic} ${time}`,
    description: `Dynamic Data for ${params.dynamic}`,
  };
};

export default function ({ params }: Props) {
  return (
    <p>
      This is to show how we can export dynamic meta data function instead of
      object
    </p>
  );
}
