import { getProgrammeById } from '@/lib/programmes';
import ProgrammeDetail from '@/components/programme-detail';

export default function PlaygroupPage() {
  const p = getProgrammeById('playgroup');
  if (!p) return null;
  return <ProgrammeDetail p={p} icon="🧸" />;
}
