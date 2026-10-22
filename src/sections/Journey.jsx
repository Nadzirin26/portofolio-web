import Reveal from '../components/Reveal';
import { useEffect, useRef, useState } from 'react';
import { certifications, education } from '../data';

export default function Journey() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [imageError, setImageError] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!selectedCertificate) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedCertificate]);

  function showCertificate(certificate) {
    setImageError(false);
    setSelectedCertificate(certificate);
  }

  return (
    <section id="education" className="section journey-section" aria-labelledby="journey-title">
      <p className="eyebrow">03 / My Journey</p>
      <Reveal as="h2" id="journey-title">Riwayat Pendidikan</Reveal>
      <div className="education-list">
        {education.map(item => (
          <Reveal as="article" className="education-item" key={item.school}>
            <h3>{item.school}</h3>
            <p className="education-meta">{item.degree} / {item.year}</p>
            <p>{item.desc}</p>
          </Reveal>
        ))}
      </div>
      <Reveal as="header" className="certification-heading">
        <h3>Pengalaman &amp; Sertifikasi</h3>
        <p>UDINUS · UKM Bulutangkis · IBM | Coursera · {certifications.length} sertifikat</p>
      </Reveal>
      <div className="certificate-grid">
        {certifications.map((certificate, index) => (
          <Reveal as="article" className="certificate" key={certificate.title}>
            <p className="eyebrow">{String(index + 1).padStart(2, '0')} / {certificate.year}</p>
            <h4>{certificate.title}</h4>
            <p className="certificate-organization">{certificate.organization}</p>
            <p className="certificate-description">{certificate.desc}</p>
            <button type="button" className="button" aria-haspopup="dialog" aria-label={`Lihat Sertifikat: ${certificate.title}`} onClick={() => showCertificate(certificate)}>
              Lihat Sertifikat {String(index + 1).padStart(2, '0')} <span aria-hidden="true">↗</span>
            </button>
          </Reveal>
        ))}
      </div>
      <dialog ref={dialogRef} className="certificate-dialog" aria-labelledby="certificate-dialog-title" onCancel={() => setSelectedCertificate(null)} onClick={event => { if (event.target === event.currentTarget) setSelectedCertificate(null); }}>
        {selectedCertificate && (
          <div className="certificate-dialog-content">
            <header className="certificate-dialog-heading">
              <div>
                <p className="eyebrow">{selectedCertificate.organization} / {selectedCertificate.year}</p>
                <h3 id="certificate-dialog-title">{selectedCertificate.title}</h3>
              </div>
              <button className="dialog-close" type="button" autoFocus onClick={() => setSelectedCertificate(null)} aria-label="Tutup sertifikat">×</button>
            </header>
            {imageError ? <p className="image-error">Gambar belum berhasil dimuat. Kamu dapat membukanya melalui tautan di bawah.</p> : <img src={selectedCertificate.image} alt={`Sertifikat ${selectedCertificate.title} milik Akmal Shaum Nadzirin`} onError={() => setImageError(true)} />}
            <a className="certificate-original" href={selectedCertificate.pdf || selectedCertificate.image} target="_blank" rel="noopener noreferrer">{selectedCertificate.pdf ? 'Buka PDF asli' : 'Buka gambar asli'} <span aria-hidden="true">↗</span></a>
          </div>
        )}
      </dialog>
    </section>
  );
}
