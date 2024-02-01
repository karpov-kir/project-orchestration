import { NotionPage } from '@/components/NotionPage';
import { notionApi } from '@/notionApi';

export default async function Page({ params }: { params: { id: string } }) {
  const recordMap = await notionApi.getPage(params.id);

  return <NotionPage recordMap={recordMap} />;
}
