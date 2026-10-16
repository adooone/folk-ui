import { useEffect, useMemo, useRef, useState } from 'react';
import { CodeBlock } from '../../components/code-block';
import type { PropDef } from '../../components/prop-table';
import { PropTable } from '../../components/prop-table';
import { useBodyScrollLock } from '../../hooks/use-body-scroll-lock';
import { useEscapeKey } from '../../hooks/use-escape-key';
import { useFocusTrap } from '../../hooks/use-focus-trap';
import { getDefaultValue } from '../../utils/prop-helpers';
import styles from './detail-panel.module.scss';

interface DetailPanelProps {
  id: string;
  name: string;
  props: PropDef[];
  onClose: () => void;
}

function generateCode(
  componentName: string,
  props: PropDef[],
  selectedValues: Record<string, string | boolean>,
): string {
  const propLines: string[] = [];
  for (const prop of props) {
    const value = selectedValues[prop.name];
    if (value === undefined || value === '') continue;

    if (typeof value === 'boolean') {
      if (value) propLines.push(`  ${prop.name}`);
    } else {
      propLines.push(`  ${prop.name}="${value}"`);
    }
  }

  const propBlock = propLines.length > 0 ? `\n${propLines.join('\n')}\n` : '';
  const imports = `import { ${componentName} } from '@dendelion/folk-ui';`;

  return `${imports}\n\n<${componentName}${propBlock}>\n  ...\n</${componentName}>`;
}

export function DetailPanel({ id, name, props, onClose }: DetailPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [selectedValues, setSelectedValues] = useState<Record<string, string | boolean>>({});

  useEscapeKey(true, onClose);
  useFocusTrap(true, panelRef);
  useBodyScrollLock(true);

  useEffect(() => {
    const defaults: Record<string, string | boolean> = {};
    for (const prop of props) defaults[prop.name] = getDefaultValue(prop);
    setSelectedValues(defaults);
  }, [props]);

  const code = useMemo(() => {
    if (props.length === 0) return '';
    return generateCode(name, props, selectedValues);
  }, [name, props, selectedValues]);

  const handleValueChange = (propName: string, value: string | boolean) => {
    setSelectedValues((prev) => ({ ...prev, [propName]: value }));
  };

  return (
    <>
      <button
        type="button"
        className={styles.backdrop}
        aria-label="Close details"
        onClick={onClose}
      />
      <div ref={panelRef} className={styles.panel} tabIndex={-1}>
        <div className={styles.header}>
          <span className={styles.headerTitle}>{name}</span>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close details"
          >
            &times;
          </button>
        </div>
        <div className={styles.content}>
          {props.length > 0 && (
            <div className={styles.section}>
              <div className={styles.sectionLabel}>Props</div>
              <PropTable
                props={props}
                surface="chalkboard"
                selectedValues={selectedValues}
                onValueChange={handleValueChange}
              />
            </div>
          )}
          {code && (
            <div className={styles.section}>
              <div className={styles.sectionLabel}>Code</div>
              <CodeBlock code={code} filename={`${id}.example.tsx`} surface="chalkboard" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
