import { getProgrammeById } from '@/lib/programmes';
import ProgrammeDetail from '@/components/programme-detail';

export default function NurseryPage() {
  const p = getProgrammeById('nursery');
  if (!p) return null;
  return <ProgrammeDetail p={p} icon="📚" />;
}
