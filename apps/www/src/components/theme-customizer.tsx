'use client';

import * as React from 'react';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { RepeatIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useConfig } from '@/hooks/use-config';
import { useThemesConfig } from '@/hooks/use-themes-config';
import { THEMES } from '@/lib/themes';
import { cn } from '@/lib/utils';
import { useMounted } from '@/registry/hooks/use-mounted';

import { Label } from '../components/ui/label';
import { CopyCodeButton, getThemeCode } from './copy-code-button';
import { ThemesSwitcher } from './themes-selector-mini';
import { Skeleton } from './ui/skeleton';

export function ThemeCustomizer() {
  const mounted = useMounted();
  const [config, setConfig] = useConfig();
  const { setThemesConfig, themesConfig } = useThemesConfig();
  const activeTheme = themesConfig.activeTheme ?? THEMES['default-shadcn'];
  const { resolvedTheme: mode, setTheme: setMode } = useTheme();

  const themeCode = React.useMemo(() => {
    return getThemeCode(activeTheme, config.radius);
  }, [activeTheme, config.radius]);

  return (
    <div className="flex h-full flex-col space-y-4 md:space-y-6">
      <div className="flex items-start justify-between px-6">
        <div className="space-y-1 pr-2">
          <div className="leading-none font-semibold tracking-tight">
            Customize
          </div>
          <div className="text-xs text-muted-foreground">
            Customize your components colors.
          </div>
        </div>
        <Button
          size="icon"
          variant="ghost"
          className="ml-auto rounded-[0.5rem]"
          onClick={() => {
            setConfig({
              installationType: 'cli',
              packageManager: 'pnpm',
              radius: 0.5,
            });
            setThemesConfig({
              activeTheme: THEMES['default-shadcn'],
            });
          }}
        >
          <RepeatIcon />
          <span className="sr-only">Reset</span>
        </Button>
      </div>
      <div className="flex flex-col space-y-4 md:space-y-6">
        <div className="space-y-1.5 px-6">
          <Label className="text-xs">Theme</Label>
          <ThemesSwitcher />
        </div>
        <div className="space-y-1.5 px-6">
          <Label className="text-xs">Radius</Label>
          <div className="grid grid-cols-5 gap-2">
            {['0', '0.3', '0.5', '0.75', '1.0'].map((value) => {
              return (
                <Button
                  key={value}
                  size="sm"
                  variant="outline"
                  className={cn(
                    config.radius === Number.parseFloat(value) &&
                      'border-2 border-primary'
                  )}
                  onClick={() => {
                    setConfig({
                      ...config,
                      radius: Number.parseFloat(value),
                    });
                  }}
                >
                  {value}
                </Button>
              );
            })}
          </div>
        </div>
        <div className="space-y-1.5 px-6">
          <Label className="text-xs">Mode</Label>
          <div className="flex gap-2">
            {mounted ? (
              <>
                <Button
                  size="sm"
                  variant="outline"
                  className={cn(mode === 'light' && 'border-2 border-primary')}
                  onClick={() => setMode('light')}
                >
                  <SunIcon />
                  Light
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className={cn(mode === 'dark' && 'border-2 border-primary')}
                  onClick={() => setMode('dark')}
                >
                  <MoonIcon />
                  Dark
                </Button>
              </>
            ) : (
              <>
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-8 w-full" />
              </>
            )}
          </div>
        </div>

        <Separator className="w-full" />

        <div className="relative grow space-y-1.5 px-4">
          <div className="h-full flex-1 flex-col overflow-hidden data-[state=active]:flex">
            <div
              className="relative h-full overflow-auto rounded-lg bg-black py-6"
              data-rehype-pretty-code-fragment
            >
              <pre className="bg-black font-mono text-sm leading-relaxed">
                <code data-line-numbers="">
                  <span className="line text-zinc-700">{`/* ${themesConfig.activeTheme.name} */`}</span>
                  {themeCode.split('\n').map((line, index) => (
                    <span key={index} className="line">
                      {line}
                    </span>
                  ))}
                </code>
              </pre>
            </div>
          </div>
          <CopyCodeButton className="absolute top-2 right-6" compact />
        </div>
      </div>
    </div>
  );
}
