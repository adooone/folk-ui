import { useState } from 'react';
import { SettingGroup } from '../../components/setting-group';
import { SettingRow } from '../../components/setting-row';
import { Switch } from '../../components/switch';
import { Entry } from './entry';

export function SettingGroupEntry() {
  const [sound, setSound] = useState(true);
  const [badges, setBadges] = useState(false);

  return (
    <Entry name="SettingGroup" description="Groups several SettingRows under a shared heading.">
      <SettingGroup title="Notifications" description="Control how this app reaches you.">
        <SettingRow
          label="Play sound"
          control={<Switch checked={sound} onChange={(event) => setSound(event.target.checked)} />}
        />
        <SettingRow
          label="Show badges"
          control={
            <Switch checked={badges} onChange={(event) => setBadges(event.target.checked)} />
          }
        />
      </SettingGroup>
    </Entry>
  );
}
