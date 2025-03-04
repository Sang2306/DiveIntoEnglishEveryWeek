import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        {/* <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Sign in</a>
          </Link>
        </li> */}
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {
              'Dive into English for an hour weekly on Sunday from 7:30pm to 9pm for\n'
            }
            <span className="text-primary-500">Everyone</span>
          </>
        }
        description="The easiest way to get better at English Speaking is Speaking"
        button={
          <Link href="https://meet.google.com/myi-vbhx-fcy">
            <a>
              <Button xl>Join with us here 🎉</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
