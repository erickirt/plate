'use client';

import type { ComponentProps } from 'react';
import * as React from 'react';

import type { ImperativePanelHandle } from 'react-resizable-panels';

import { useLiftMode } from '@/hooks/use-lift-mode';
import { useLocale } from '@/hooks/useLocale';
import { cn } from '@/lib/utils';
import PlaygroundDemo from '@/registry/examples/playground-demo';

import { PlaygroundPreviewToolbar } from './playground-preview-toolbar';
import { ThemeWrapper } from './theme-wrapper';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from './ui/resizable';

const i18n = {
  cn: {
    description: 'AI 编辑器',
  },
  en: {
    description: 'An AI editor',
  },
};

// TODO: sync
export function PlaygroundPreview({
  children,
  className,
  ...props
}: {
  block?: any;
} & ComponentProps<'div'>) {
  const locale = useLocale();
  const content = i18n[locale as keyof typeof i18n];

  const block: any = {
    description: content.description,
    name: 'editor-ai',
    src: '/blocks/playground',
  };

  const { isLiftMode } = useLiftMode(block.name);
  // const [isLoading, setIsLoading] = React.useState(true);
  const ref = React.useRef<ImperativePanelHandle>(null);
  // const [fullScreen, setFullScreen] = useState(false);

  return (
    <div
      id={block.name}
      className={cn(
        'relative w-full scroll-m-28',
        className
        // fullScreen &&
        //   'fixed inset-0 z-50 max-w-none **:data-slate-editor:max-h-[calc(100dvh-44px)]'
      )}
      style={
        {
          '--container-height': block.container?.height,
        } as React.CSSProperties
      }
      {...props}
    >
      <PlaygroundPreviewToolbar
        block={block}
        resizablePanelRef={ref}
        // fullScreen={fullScreen}
        // setFullScreen={setFullScreen}
      />

      <ResizablePanelGroup className="relative z-10" direction="horizontal">
        <ResizablePanel
          ref={ref}
          className={cn(
            'relative rounded-lg border bg-background max-sm:w-full max-sm:flex-auto!',
            isLiftMode && 'border-border/50'
          )}
          defaultSize={100}
          minSize={30}
        >
          <div className="chunk-mode relative z-20 w-full bg-background">
            <ThemeWrapper>
              <React.Suspense fallback={null}>
                <PlaygroundDemo className="h-[650px]" />
              </React.Suspense>
            </ThemeWrapper>
          </div>

          {/* {isLoading ? ( */}
          {/*  <div className="absolute inset-0 z-10 flex h-(--container-height) w-full items-center justify-center gap-2 text-sm text-muted-foreground"> */}
          {/*    <Icons.spinner className="h-4 w-4 animate-spin" /> */}
          {/*    Loading... */}
          {/*  </div> */}
          {/* ) : null} */}
          {/* <iframe */}
          {/*  src={`/blocks/${block.style}/${block.name}`} */}
          {/*  height={block.container?.height ?? 450} */}
          {/*  className="chunk-mode relative z-20 w-full bg-background" */}
          {/*  onLoad={() => { */}
          {/*    setIsLoading(false) */}
          {/*  }} */}
          {/* /> */}
        </ResizablePanel>

        <ResizableHandle
          className={cn(
            'relative hidden w-3 bg-transparent p-0 after:absolute after:top-1/2 after:right-0 after:h-8 after:w-[6px] after:-translate-x-px after:-translate-y-1/2 after:rounded-full after:bg-border after:transition-all hover:after:h-10 sm:block',
            isLiftMode && 'invisible'
          )}
        />
        <ResizablePanel defaultSize={0} minSize={0} />
      </ResizablePanelGroup>
    </div>
  );
}
