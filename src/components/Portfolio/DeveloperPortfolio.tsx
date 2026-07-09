'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const skills = [
  'React',
  'JavaScript (ES6+)',
  'HTML5',
  'CSS3',
  'SQL (Learning)',
  'Responsive Web Design',
  'Component-Based Architecture',
  'Version Control',
  'Git',
  'GitHub',
  'Visual Studio Code',
  'Vite',
  'npm',
  'Chrome DevTools',
  'Debugging & Troubleshooting',
];

const projects = [
  {
    title: 'Metro Awnings Website',
    type: 'Work in progress',
    description:
      'Developing a modern business website for a family-owned company using React, reusable components, and responsive layouts for desktop and mobile.',
    stack: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vite'],
    highlights: [
      'Implementing interactive navigation and smoother user experience.',
      'Using component-based architecture to improve maintainability.',
      'Managing source code and version history in GitHub.',
    ],
  },
  {
    title: 'Additional Development Experience',
    type: 'Coursework portfolio',
    description:
      'Completed multiple web-development projects through ERA Solutions veteran-focused software development courses.',
    stack: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vite', 'npm'],
    highlights: [
      'Built hands-on projects covering React fundamentals and JavaScript programming.',
      'Applied responsive web development and reusable UI patterns.',
      'Practiced GitHub repositories, version control, and Chrome DevTools debugging.',
    ],
  },
];

const experience = [
  {
    role: 'Fleet Mechanic',
    company: 'Colorado State Patrol',
    summary:
      'Diagnose and repair mechanical and electrical systems on state fleet vehicles.',
    description:
      'Diagnose and repair mechanical and electrical systems on state fleet vehicles using manufacturer diagnostic software, wiring diagrams, and preventive maintenance workflows. Maintain detailed service records and apply analytical troubleshooting in high-priority operational environments.',
  },
  {
    role: 'Corporal | Motor Transport Operator (MOS 3531)',
    company: 'United States Marine Corps',
    summary:
      'Served four years in the U.S. Marine Corps, including two years as a Corporal.',
    description:
      'Served four years in the U.S. Marine Corps, including two years as a Corporal. Supervised and trained junior Marines, managed tactical fleet maintenance schedules, and coordinated transportation logistics while maintaining mission readiness and accountability for equipment valued at over $10M.',
  },
];

const certifications = [
  'HTML Certification',
  'CSS Certification',
  'JavaScript Certification',
  'React (Currently Studying)',
  'SQL (Currently Learning)',
];

const strengths = [
  'Strong analytical and troubleshooting abilities',
  'Technical documentation',
  'Leadership and team collaboration',
  'Military leadership experience',
  'Adaptability and continuous learning',
  'Excellent problem-solving skills',
];

export default function DeveloperPortfolio() {
  const [openProject, setOpenProject] = useState<string | null>(
    projects[0].title,
  );
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    hero.style.setProperty('--mx', '50%');
    hero.style.setProperty('--my', '45%');

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    const supportsHover = window.matchMedia(
      '(hover: hover) and (pointer: fine)',
    ).matches;

    if (reduceMotion || !supportsHover) {
      return;
    }

    let rafId = 0;

    const updatePosition = (clientX: number, clientY: number) => {
      const rect = hero.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const x = Math.min(
        100,
        Math.max(0, ((clientX - rect.left) / rect.width) * 100),
      );
      const y = Math.min(
        100,
        Math.max(0, ((clientY - rect.top) / rect.height) * 100),
      );

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        hero.style.setProperty('--mx', `${x}%`);
        hero.style.setProperty('--my', `${y}%`);
      });
    };

    const handleMove = (event: MouseEvent) => {
      updatePosition(event.clientX, event.clientY);
    };

    const handleLeave = () => {
      hero.style.setProperty('--mx', '50%');
      hero.style.setProperty('--my', '45%');
    };

    hero.addEventListener('mousemove', handleMove);
    hero.addEventListener('mouseleave', handleLeave);

    return () => {
      cancelAnimationFrame(rafId);
      hero.removeEventListener('mousemove', handleMove);
      hero.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <main className='relative overflow-hidden bg-[var(--portfolio-bg)] text-[var(--portfolio-text)]'>
      <section
        ref={heroRef}
        className='hero-stage relative isolate min-h-screen overflow-hidden'
      >
        <div className='absolute inset-0 -z-10 overflow-hidden'>
          <div className='hero-gradient-bg absolute inset-0' />
          <div className='hero-mouse-shader pointer-events-none absolute inset-0' />
          <div className='hero-orb hero-orb-cyan absolute top-[-10%] left-[-8%] h-80 w-80 rounded-full blur-3xl' />
          <div className='hero-orb hero-orb-blue absolute top-[12%] right-[-6%] h-96 w-96 rounded-full blur-3xl' />
          <div className='hero-orb hero-orb-soft absolute bottom-[-10%] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl' />
          <div className='absolute inset-0 bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--background)_36%,transparent),transparent_45%,color-mix(in_srgb,var(--background)_56%,transparent))]' />
        </div>

        <div className='relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-8 lg:px-8'>
          <div className='hero-logo-wrap relative'>
            <div className='hero-logo-glow absolute inset-0 -z-10 rounded-full' />
            <Image
              src='/images/logo/FullLogo.svg'
              alt='Moises Rosas logo'
              width={560}
              height={180}
              className='hero-logo h-auto w-[230px] sm:w-[340px] lg:w-[470px]'
              priority
            />
          </div>
        </div>
      </section>

      <section className='px-4 py-20 sm:px-8 lg:px-8'>
        <div className='mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]'>
          <div className='max-w-3xl'>
            <span className='inline-flex items-center rounded-full border border-[var(--portfolio-border)] bg-[var(--portfolio-surface)] px-4 py-2 text-sm text-[var(--portfolio-muted)] backdrop-blur-sm'>
              Available for software development opportunities
            </span>
            <h1 className='mt-6 text-4xl leading-tight font-semibold sm:text-5xl lg:text-7xl'>
              <span className='block bg-gradient-to-r from-[var(--accent-warm)] via-[var(--portfolio-text)] to-[var(--accent-soft)] bg-clip-text text-5xl leading-none font-bold text-transparent sm:text-6xl lg:text-8xl'>
                Moises Rosas
              </span>
              <span className='mt-5 block text-3xl leading-tight sm:text-4xl lg:text-5xl'>
                Aspiring Full-Stack Software Developer
              </span>
            </h1>
            <p className='mt-6 max-w-2xl text-lg leading-8 text-[var(--portfolio-muted)] sm:text-xl'>
              Hands-on experience building React applications with a strong
              foundation in JavaScript, HTML, CSS, and SQL. I bring 5+ years of
              technical troubleshooting, diagnostics, and leadership experience
              from the U.S. Marine Corps and Colorado State Patrol while
              continuing to expand my full-stack skills.
            </p>
            <div className='mt-8 flex flex-wrap gap-4'>
              <Link
                href='#projects'
                className='rounded-full bg-[var(--cta-bg)] px-6 py-3 text-sm font-semibold text-[var(--cta-text)] transition hover:scale-[1.02]'
              >
                View projects
              </Link>
              <a
                href='/contact'
                className='rounded-full border border-[var(--secondary-chip-border)] bg-[var(--secondary-chip-bg)] px-6 py-3 text-sm font-semibold text-[var(--secondary-chip-text)] backdrop-blur-sm transition hover:border-[var(--secondary-chip-hover-border)] hover:text-[var(--secondary-chip-hover-text)]'
              >
                Contact me
              </a>
            </div>

            <div className='mt-10 flex flex-wrap gap-3'>
              {skills.slice(0, 6).map((skill) => (
                <span
                  key={skill}
                  className='rounded-full border border-[var(--portfolio-border)] bg-[var(--portfolio-surface-strong)] px-3 py-2 text-sm text-[var(--portfolio-text)]'
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className='rounded-[2rem] border border-[var(--portfolio-border)] bg-[var(--portfolio-surface)] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl'>
            <div className='rounded-[1.5rem] border border-[var(--portfolio-border)] bg-[var(--portfolio-surface-strong)] p-6'>
              <p className='text-sm tracking-[0.3em] text-[var(--accent-warm)] uppercase'>
                Current focus
              </p>
              <h2 className='mt-3 text-2xl font-semibold text-[var(--portfolio-text)]'>
                Full-stack growth with React, SQL, and cybersecurity foundations
              </h2>
              <ul className='mt-6 space-y-4 text-sm text-[var(--portfolio-muted)]'>
                <li className='flex items-start gap-3'>
                  <span className='mt-1 h-2.5 w-2.5 rounded-full bg-[var(--accent-warm)]' />
                  Building component-based React interfaces with responsive web
                  design best practices.
                </li>
                <li className='flex items-start gap-3'>
                  <span className='mt-1 h-2.5 w-2.5 rounded-full bg-[var(--accent-warm)]' />
                  Strengthening backend fundamentals and SQL while expanding
                  full-stack workflows.
                </li>
                <li className='flex items-start gap-3'>
                  <span className='mt-1 h-2.5 w-2.5 rounded-full bg-[var(--accent-warm)]' />
                  Applying military and fleet diagnostics discipline to software
                  troubleshooting and delivery.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id='about' className='px-4 py-20 sm:px-8 lg:px-8'>
        <div className='mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]'>
          <div className='rounded-[2rem] border border-[var(--portfolio-border)] bg-[var(--portfolio-surface)] p-8 backdrop-blur-sm'>
            <p className='text-sm tracking-[0.35em] text-[var(--accent-soft)] uppercase'>
              About me
            </p>
            <h2 className='mt-4 text-3xl font-semibold text-[var(--portfolio-text)] sm:text-4xl'>
              A developer with discipline, curiosity, and a growth mindset.
            </h2>
            <p className='mt-5 text-lg leading-8 text-[var(--portfolio-muted)]'>
              I am currently pursuing a bachelor's degree in Cybersecurity at
              American Public University (expected 2029) while growing as an
              aspiring full-stack developer. My background in diagnostics,
              maintenance systems, and leadership has shaped how I approach
              debugging, collaboration, communication, and technical ownership.
            </p>
          </div>

          <div className='rounded-[2rem] border border-[var(--portfolio-border)] bg-gradient-to-br from-[var(--portfolio-surface)] to-[var(--portfolio-surface-strong)] p-8 backdrop-blur-sm'>
            <div className='flex flex-wrap gap-3'>
              {skills.map((skill) => (
                <span
                  key={skill}
                  className='rounded-full border border-[var(--portfolio-border)] bg-[var(--portfolio-surface-strong)] px-3.5 py-2 text-sm text-[var(--portfolio-text)]'
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className='mt-8 grid gap-4 sm:grid-cols-3'>
              <div className='rounded-2xl border border-[var(--portfolio-border)] bg-[var(--portfolio-surface-strong)] p-4'>
                <p className='text-3xl font-semibold text-[var(--portfolio-text)]'>
                  5+
                </p>
                <p className='mt-2 text-sm text-[var(--portfolio-muted)]'>
                  Years in technical operations
                </p>
              </div>
              <div className='rounded-2xl border border-[var(--portfolio-border)] bg-[var(--portfolio-surface-strong)] p-4'>
                <p className='text-3xl font-semibold text-[var(--portfolio-text)]'>
                  10M+
                </p>
                <p className='mt-2 text-sm text-[var(--portfolio-muted)]'>
                  Equipment accountability value managed
                </p>
              </div>
              <div className='rounded-2xl border border-[var(--portfolio-border)] bg-[var(--portfolio-surface-strong)] p-4'>
                <p className='text-3xl font-semibold text-[var(--portfolio-text)]'>
                  2029
                </p>
                <p className='mt-2 text-sm text-[var(--portfolio-muted)]'>
                  Cybersecurity degree target
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='projects' className='px-4 py-20 sm:px-8 lg:px-8'>
        <div className='mx-auto max-w-7xl'>
          <div className='max-w-2xl'>
            <p className='text-sm tracking-[0.35em] text-[var(--accent-warm)] uppercase'>
              Selected projects
            </p>
            <h2 className='mt-3 text-3xl font-semibold text-[var(--portfolio-text)] sm:text-4xl'>
              Projects that reflect my direction as a full-stack developer.
            </h2>
          </div>

          <div className='mt-10 grid gap-6 lg:grid-cols-2'>
            {projects.map((project) => (
              <article
                key={project.title}
                className='rounded-[2rem] border border-[var(--portfolio-border)] bg-[var(--portfolio-surface)] p-7 backdrop-blur-sm transition hover:-translate-y-1 hover:border-[var(--accent-warm)]/45'
              >
                <div className='flex items-center justify-between gap-3'>
                  <h3 className='text-2xl font-semibold text-[var(--portfolio-text)]'>
                    {project.title}
                  </h3>
                  <span className='rounded-full border border-[var(--project-type-border)] bg-[var(--project-type-bg)] px-3 py-1 text-xs tracking-[0.2em] text-[var(--project-type-text)] uppercase'>
                    {project.type}
                  </span>
                </div>
                <p className='mt-4 text-base leading-8 text-[var(--portfolio-muted)]'>
                  {project.description}
                </p>
                <div className='mt-6 flex flex-wrap gap-2'>
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className='rounded-full border border-[var(--portfolio-border)] bg-[var(--portfolio-surface-strong)] px-3 py-1.5 text-sm text-[var(--portfolio-text)]'
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <button
                  type='button'
                  onClick={() =>
                    setOpenProject((prev) =>
                      prev === project.title ? null : project.title,
                    )
                  }
                  className='mt-6 rounded-full border border-[var(--secondary-chip-border)] bg-[var(--secondary-chip-bg)] px-4 py-2 text-xs font-semibold tracking-[0.12em] text-[var(--secondary-chip-text)] uppercase transition hover:border-[var(--secondary-chip-hover-border)] hover:text-[var(--secondary-chip-hover-text)]'
                >
                  {openProject === project.title
                    ? 'Hide details'
                    : 'View details'}
                </button>

                {openProject === project.title && (
                  <ul className='mt-4 space-y-2 text-sm text-[var(--portfolio-muted)]'>
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className='flex items-start gap-2'>
                        <span className='mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent-warm)]' />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id='experience' className='px-4 py-20 sm:px-8 lg:px-8'>
        <div className='mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]'>
          <div className='rounded-[2rem] border border-[var(--portfolio-border)] bg-gradient-to-br from-[var(--portfolio-surface)] to-[var(--portfolio-surface-strong)] p-8 backdrop-blur-sm'>
            <p className='text-sm tracking-[0.35em] text-[var(--accent-warm)] uppercase'>
              Experience
            </p>
            <h2 className='mt-4 text-3xl font-semibold text-[var(--portfolio-text)] sm:text-4xl'>
              Built on discipline, diagnostics, and team leadership.
            </h2>
          </div>

          <div className='space-y-5'>
            {experience.map((item) => (
              <div
                key={item.role}
                className='rounded-[2rem] border border-[var(--portfolio-border)] bg-[var(--portfolio-surface)] p-7 backdrop-blur-sm'
              >
                <div className='flex w-full flex-wrap items-center justify-between gap-3 text-left'>
                  <h3 className='text-xl font-semibold text-[var(--portfolio-text)]'>
                    {item.role}
                  </h3>
                  <span className='text-sm text-[var(--accent-soft)]'>
                    {item.company}
                  </span>
                </div>

                <p className='mt-3 text-sm leading-7 text-[var(--portfolio-muted)]'>
                  {item.summary}
                </p>
                <p className='mt-4 text-base leading-8 text-[var(--portfolio-muted)]'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='px-4 pb-20 sm:px-8 lg:px-8'>
        <div className='mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]'>
          <div className='rounded-[2rem] border border-[var(--portfolio-border)] bg-[var(--portfolio-surface)] p-8 backdrop-blur-sm'>
            <p className='text-sm tracking-[0.35em] text-[var(--accent-soft)] uppercase'>
              Education & certifications
            </p>
            <h2 className='mt-4 text-3xl font-semibold text-[var(--portfolio-text)] sm:text-4xl'>
              Continuing to grow as a developer and cybersecurity student.
            </h2>
            <p className='mt-5 text-lg leading-8 text-[var(--portfolio-muted)]'>
              American Public University, Bachelor's Degree in Progress. Current
              major: Cybersecurity. Expected graduation: 2029.
            </p>
          </div>

          <div className='rounded-[2rem] border border-[var(--portfolio-border)] bg-[var(--portfolio-surface-strong)] p-8'>
            <p className='mb-4 text-xs tracking-[0.2em] text-[var(--portfolio-muted)] uppercase'>
              Certifications
            </p>
            <div className='flex flex-wrap gap-3'>
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className='rounded-full border border-[var(--portfolio-border)] bg-[var(--portfolio-surface)] px-3.5 py-2 text-sm text-[var(--portfolio-text)]'
                >
                  {cert}
                </span>
              ))}
            </div>

            <p className='mt-8 mb-4 text-xs tracking-[0.2em] text-[var(--portfolio-muted)] uppercase'>
              Additional strengths
            </p>
            <div className='flex flex-wrap gap-3'>
              {strengths.map((strength) => (
                <span
                  key={strength}
                  className='rounded-full border border-[var(--portfolio-border)] bg-[var(--portfolio-surface)] px-3.5 py-2 text-sm text-[var(--portfolio-text)]'
                >
                  {strength}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id='contact' className='px-4 pb-24 sm:px-8 lg:px-8'>
        <div className='mx-auto max-w-7xl rounded-[2rem] border border-[var(--portfolio-border)] bg-gradient-to-br from-[var(--portfolio-surface)] to-[var(--portfolio-surface-strong)] p-8 text-center backdrop-blur-sm'>
          <p className='text-sm tracking-[0.35em] text-[var(--accent-warm)] uppercase'>
            Let’s connect
          </p>
          <h2 className='mt-4 text-3xl font-semibold text-[var(--portfolio-text)] sm:text-4xl'>
            Interested in a developer who learns fast and ships with care?
          </h2>
          <p className='mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--portfolio-muted)]'>
            Open to entry-level software development opportunities where I can
            contribute to meaningful products, collaborate with strong teams,
            and continue growing into a dependable full-stack engineer.
          </p>
          <div className='mt-8 flex flex-wrap justify-center gap-4'>
            <a
              href='/contact'
              className='rounded-full bg-[var(--cta-bg)] px-6 py-3 text-sm font-semibold text-[var(--cta-text)] transition hover:scale-[1.02]'
            >
              Email me
            </a>
            <a
              href='https://github.com/moiro24'
              target='_blank'
              rel='noreferrer'
              className='rounded-full border border-[var(--secondary-chip-border)] bg-[var(--secondary-chip-bg)] px-6 py-3 text-sm font-semibold text-[var(--secondary-chip-text)] backdrop-blur-sm transition hover:border-[var(--secondary-chip-hover-border)] hover:text-[var(--secondary-chip-hover-text)]'
            >
              GitHub profile
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero-stage {
          min-height: max(100vh, 640px);
        }

        .hero-gradient-bg {
          background:
            radial-gradient(
              circle at 15% 22%,
              color-mix(in srgb, var(--accent-warm) 26%, transparent),
              transparent 48%
            ),
            radial-gradient(
              circle at 82% 20%,
              color-mix(in srgb, var(--accent-soft) 22%, transparent),
              transparent 46%
            ),
            radial-gradient(
              circle at 50% 78%,
              color-mix(in srgb, var(--primary) 20%, transparent),
              transparent 52%
            ),
            linear-gradient(
              135deg,
              color-mix(in srgb, var(--background) 92%, var(--primary) 8%),
              var(--background)
            );
          animation: heroGradientShift 16s ease-in-out infinite alternate;
        }

        .hero-mouse-shader {
          background:
            radial-gradient(
              500px circle at var(--mx, 50%) var(--my, 45%),
              color-mix(in srgb, var(--accent-warm) 22%, transparent) 0%,
              color-mix(in srgb, var(--accent-soft) 16%, transparent) 34%,
              transparent 68%
            ),
            radial-gradient(
              260px circle at calc(var(--mx, 50%) + 6%)
                calc(var(--my, 45%) - 8%),
              color-mix(in srgb, var(--primary) 20%, transparent) 0%,
              transparent 62%
            );
          mix-blend-mode: screen;
          opacity: 0.72;
          transition: opacity 260ms ease;
          will-change: background;
        }

        .hero-orb {
          animation: heroOrbFloat 14s ease-in-out infinite;
        }

        .hero-orb-cyan {
          background: color-mix(in srgb, var(--accent-warm) 38%, transparent);
          animation-delay: -1s;
        }

        .hero-orb-blue {
          background: color-mix(in srgb, var(--accent-soft) 34%, transparent);
          animation-delay: -5s;
        }

        .hero-orb-soft {
          background: color-mix(in srgb, var(--primary) 26%, transparent);
          animation-delay: -9s;
        }

        .hero-logo-wrap {
          animation: heroLogoFloat 7.5s ease-in-out infinite;
        }

        .hero-logo {
          filter: drop-shadow(
              0 18px 44px color-mix(in srgb, var(--primary) 26%, transparent)
            )
            drop-shadow(
              0 6px 20px color-mix(in srgb, var(--foreground) 12%, transparent)
            );
          transition:
            transform 360ms cubic-bezier(0.22, 0.61, 0.36, 1),
            filter 420ms cubic-bezier(0.22, 0.61, 0.36, 1);
        }

        .hero-logo-glow {
          background: radial-gradient(
            circle,
            color-mix(in srgb, var(--accent-warm) 28%, transparent) 0%,
            color-mix(in srgb, var(--accent-soft) 18%, transparent) 36%,
            transparent 72%
          );
          transform: scale(1.3);
          animation: heroGlowPulse 5.2s ease-in-out infinite;
          transition:
            transform 420ms cubic-bezier(0.22, 0.61, 0.36, 1),
            opacity 420ms cubic-bezier(0.22, 0.61, 0.36, 1);
        }

        @media (hover: hover) and (pointer: fine) {
          .hero-logo-wrap:hover .hero-logo {
            transform: translateY(-8px) scale(1.045);
            filter: drop-shadow(
                0 24px 54px color-mix(in srgb, var(--primary) 34%, transparent)
              )
              drop-shadow(
                0 8px 24px
                  color-mix(in srgb, var(--accent-warm) 26%, transparent)
              );
          }

          .hero-logo-wrap:hover .hero-logo-glow {
            transform: scale(1.42);
            opacity: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-logo,
          .hero-logo-glow {
            transition: none;
          }
        }

        @keyframes heroGradientShift {
          0% {
            transform: scale(1) translate3d(0, 0, 0);
          }
          100% {
            transform: scale(1.06) translate3d(-1.2%, 0.8%, 0);
          }
        }

        @keyframes heroOrbFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -16px, 0) scale(1.04);
          }
        }

        @keyframes heroLogoFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -8px, 0);
          }
        }

        @keyframes heroGlowPulse {
          0%,
          100% {
            opacity: 0.58;
          }
          50% {
            opacity: 0.9;
          }
        }

        @media (hover: none),
          (pointer: coarse),
          (prefers-reduced-motion: reduce) {
          .hero-mouse-shader {
            opacity: 0.4;
          }
        }
      `}</style>
    </main>
  );
}
