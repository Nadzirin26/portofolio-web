import { projectReturnUrl } from '../lib/projectReturn';
import { useEffect } from 'react';
import { FiArrowLeft, FiArrowUpRight } from 'react-icons/fi';

function Flow({ title, steps, explanation }) {
  return <section className="detail-block">
    <h2>{title}</h2>
    {explanation && <p className="flow-intro">{explanation.intro}</p>}
    <div className="flow-scroll" role="region" aria-label={title} tabIndex={0}>
      <ol className="detail-flow">{steps.map((step, i) => <li key={step}><span className="eyebrow">{String(i + 1).padStart(2, '0')}</span><p>{step}</p></li>)}</ol>
    </div>
    {explanation && <>
      <ol className="flow-explanation">{explanation.steps.map((step, i) => <li key={step.title}>
        <h3><span aria-hidden="true">{String(i + 1).padStart(2, '0')} / </span>{step.title}</h3>
        <p>{step.description}</p>
        <dl><div><dt>Masukan</dt><dd>{step.input}</dd></div><div><dt>Hasil tahap ini</dt><dd>{step.output}</dd></div></dl>
      </li>)}</ol>
      <div className="flow-branches"><h3>Percabangan & kondisi khusus</h3><ul className="detail-features">{explanation.branches.map(branch => <li key={branch}>{branch}</li>)}</ul></div>
      <p className="flow-limitation"><strong>Batas cakupan: </strong>{explanation.limitation}</p>
    </>}
  </section>;
}
export default function ProjectDetail({ project }) {
  useEffect(() => {
    document.title = project ? `${project.title} — Detail Project | Akmal Shaum Nadzirin` : 'Project tidak ditemukan | Akmal Shaum Nadzirin';
    const meta = document.querySelector('meta[name="description"]');
    const previous = meta?.getAttribute('content');
    meta?.setAttribute('content', project?.summary || 'Project yang diminta tidak ditemukan.');
    return () => { if (previous) meta?.setAttribute('content', previous); };
  }, [project]);
  if (!project) return <main className="page-shell detail-page"><a className="button" href={project ? projectReturnUrl(project.id) : '/#projects'}><FiArrowLeft aria-hidden="true" />Kembali ke project</a><h1>Project tidak ditemukan.</h1><p>Pilih project melalui halaman utama portofolio.</p></main>;
  return <>
    <a className="skip-link" href="#detail-main">Lewati ke konten</a>
    <header className="page-shell detail-nav"><a className="wordmark" href="/">ASN.</a><a className="button" href={project ? projectReturnUrl(project.id) : '/#projects'}><FiArrowLeft aria-hidden="true" />Kembali ke project</a></header>
    <main id="detail-main" className="page-shell detail-page">
      <header className="detail-header"><p className="eyebrow">{project.category} / Case study</p><h1>{project.title}</h1><p className="detail-status">{project.status}</p><p className="detail-lead">{project.summary}</p><div className="action-row">{project.links.map(link => <a key={link.href} className="button" href={link.href} target="_blank" rel="noopener noreferrer">{link.label}<FiArrowUpRight aria-hidden="true" /></a>)}</div></header>
      <figure className="detail-preview"><img src={`/projects/${project.image}`} alt={project.alt} /><figcaption>{project.caption}</figcaption></figure>
      <section className="detail-block"><h2>Latar belakang & cara kerja</h2>{project.paragraphs.map(p => <p key={p}>{p}</p>)}</section>
      {project.features.length > 0 && <section className="detail-block"><h2>Fitur utama</h2><ul className="detail-features">{project.features.map(f => <li key={f}>{f}</li>)}</ul></section>}
      {project.role && <section className="detail-block"><h2>Peran saya</h2><p>{project.role}</p></section>}
      {project.stack.length > 0 && <section className="detail-block"><h2>Teknologi & fungsinya</h2><div className="table-scroll" role="region" aria-label="Teknologi project" tabIndex={0}><table className="detail-table"><caption>Teknologi yang teridentifikasi dari source project</caption><thead><tr><th scope="col">Teknologi</th><th scope="col">Kategori</th><th scope="col">Fungsi di project</th></tr></thead><tbody>{project.stack.map(([tech, category, use]) => <tr key={tech}><th scope="row">{tech}</th><td>{category}</td><td>{use}</td></tr>)}</tbody></table></div></section>}
      {project.workflow.length > 0 && <Flow title="Workflow penggunaan" steps={project.workflow} explanation={project.workflowExplanation} />}
      {project.architecture.length > 0 && <Flow title={project.design ? 'Pipeline desain & hubungan screen' : 'Pipeline teknis & arsitektur'} steps={project.architecture} explanation={project.pipelineExplanation} />}
      {project.challenges.length > 0 && <section className="detail-block"><h2>Tantangan yang ditangani dalam implementasi</h2>{project.challenges.map(c => <p key={c}>{c}</p>)}</section>}
      <section className="detail-block"><h2>Cakupan verifikasi</h2><p>{project.verification}</p></section>
      <a className="button button-primary" href={project ? projectReturnUrl(project.id) : '/#projects'}><FiArrowLeft aria-hidden="true" />Lihat project lainnya</a>
    </main>
  </>;
}
