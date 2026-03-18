import { getProgrammeById } from '@/lib/programmes';
import ProgrammeDetail from '@/components/programme-detail';

export default function DaycarePage() {
  const p = getProgrammeById('daycare');
  if (!p) return null;
  return <ProgrammeDetail p={p} icon="🏠" />;
}
