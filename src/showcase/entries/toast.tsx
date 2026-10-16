import { Button } from '../../components/button';
import { ToastProvider, useToast } from '../../components/toast';
import { useSurface } from '../shell/surface-context';
import { Entry } from './entry';

function ToastButton() {
  const { toast } = useToast();

  return (
    <Button
      variant="secondary"
      onClick={() =>
        toast({ variant: 'success', title: 'Published', description: 'Your article is live.' })
      }
    >
      Show toast
    </Button>
  );
}

export function ToastEntry() {
  const surface = useSurface();

  return (
    <Entry
      name="Toast"
      description="A positioned, stacked notification with a title, description, and auto-dismiss."
    >
      <ToastProvider position="bottom-right" surface={surface}>
        <ToastButton />
      </ToastProvider>
    </Entry>
  );
}
