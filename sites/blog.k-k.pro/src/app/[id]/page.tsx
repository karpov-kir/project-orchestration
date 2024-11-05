import { NotionPage } from '@/components/NotionPage';
import { notionApi } from '@/notionApi';

export const revalidate = 60;

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const recordMap = await notionApi.getPage(id);

  return <NotionPage recordMap={recordMap} />;
}
