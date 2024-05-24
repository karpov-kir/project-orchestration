import { NotionPage } from '@/components/NotionPage';
import { config } from '@/config';
import { notionApi } from '@/notionApi';

export const revalidate = 60;

export default async function Page() {
  const recordMap = await notionApi.getPage(config.rootNotionPageId);

  return <NotionPage recordMap={recordMap} />;
}
