import { useState } from 'react';
import { SettingRow } from '../../components/setting-row';
import { Switch } from '../../components/switch';
import { Entry } from './entry';

export function SettingRowEntry() {
  const [enabled, setEnabled] = useState(true);

  return (
    <Entry name="SettingRow" description="A label-left, control-right row for a settings panel.">
      <SettingRow
        label="Email notifications"
        hint="Get a weekly digest of activity."
        control={
          <Switch checked={enabled} onChange={(event) => setEnabled(event.target.checked)} />
        }
      />
    </Entry>
  );
}
