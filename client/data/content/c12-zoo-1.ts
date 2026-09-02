// Class 12 Zoology Chapter 1: Reproduction in Animals (Human Reproduction & Reproductive Health)
// Gold Standard Reference Textbook & 3-Tab Architecture
// Subject: Zoology | Class: 12 | Code: c12-zoo-1

export const c12Zoo1HtmlOverview = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- Quick Glossary Card -->
  <div style="background: linear-gradient(135deg, rgba(255, 61, 0, 0.12), rgba(213, 0, 0, 0.12)); border: 1.5px solid rgba(255, 61, 0, 0.35); border-radius: 12px; padding: 18px 20px; margin-bottom: 26px; box-shadow: 0 4px 20px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 12px 0; font-size: 17.5px; font-weight: bold; display: flex; align-items: center;">
      <span style="margin-right: 8px;">📖</span> Quick Glossary &amp; Reproductive Physiology Terms
    </h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 10px;">
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF3D00;">Spermiogenesis:</b> The morphological transformation of non-motile haploid spermatids into active, specialized flagellated spermatozoa.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF3D00;">Graafian Follicle:</b> The fully mature ovarian follicle with a fluid-filled antrum containing a secondary oocyte arrested at Metaphase II.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF3D00;">Cortical Reaction:</b> Release of cortical granules beneath the oocyte vitelline membrane upon sperm entry to harden the zona pellucida, blocking polyspermy.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF3D00;">Foetal Ejection Reflex:</b> Neuroendocrine reflex triggered by fully developed fetus and placenta inducing maternal oxytocin release for parturition.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF3D00;">Colostrum:</b> Initial yellowish milk secreted during first few days postpartum, exceptionally rich in secretory <b>IgA antibodies</b> for passive infant immunity.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF3D00;">Amniocentesis:</b> Prenatal diagnostic test analyzing cultured amniotic fluid fetal cells to diagnose chromosomal disorders (Down, Turner syndrome).
      </div>
    </div>
  </div>

  <!-- SECTION 1: HUMAN REPRODUCTION -->
  <h2 style="color: #FF3D00; border-bottom: 2px solid #FF3D00; padding-bottom: 6px; margin-top: 30px; font-size: 20px;">
    1. Human Reproduction: Anatomy, Gametogenesis &amp; Embryonic Development
  </h2>
  <p>
    Human beings are viviparous, sexually reproducing organisms exhibiting distinct sexual dimorphism. The reproductive process encompasses gametogenesis (spermatogenesis in males, oogenesis in females), insemination, internal fertilization in the fallopian tube, cleavage, blastocyst implantation into the endometrium, gestation, parturition, and lactation.
  </p>

  <h3 style="color: #FF3D00; margin-top: 18px; font-size: 16.5px;">(i) Male Reproductive System</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 61, 0, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #FF3D00;">Testes &amp; Scrotum:</b> Pair of primary sex organs located extra-abdominally within the scrotum, which maintains an intratesticular temperature of <b>2-2.5&deg;C lower than core body temperature</b>, essential for spermatogenesis. Each testis contains ~250 testicular lobules, each with 1–3 highly coiled <b>seminiferous tubules</b>.</li>
      <li><b style="color: #FF3D00;">Microscopic Anatomy of Testis:</b>
        <br/>&bull; <i>Seminiferous Tubules:</i> Lined internally by two cell types: (a) <b>Spermatogonia</b> (male germ cells that undergo meiosis) and (b) <b>Sertoli Cells</b> (nurse cells that provide structural support, nutrition to developing spermatids, secrete Androgen Binding Protein [ABP], inhibin, and form the blood-testis barrier).
        <br/>&bull; <i>Interstitial Spaces (Leydig Cells):</i> Located outside tubules; synthesize and secrete androgens, predominantly <b>Testosterone</b>, under the influence of LH (ICSH).
      </li>
      <li><b style="color: #FF3D00;">Duct System:</b> Seminiferous tubules &rarr; <i>Rete testis</i> &rarr; <i>Vasa efferentia</i> (10–12 fine ducts) &rarr; <i>Epididymis</i> (comma-shaped organ on posterior testis where sperms acquire physiological maturity and motility) &rarr; <i>Vas deferens</i> &rarr; <i>Ejaculatory duct</i> &rarr; <i>Urethra</i>.</li>
      <li><b style="color: #FF3D00;">Male Accessory Glands:</b>
        <br/>&bull; <i>Seminal Vesicles (Paired):</i> Produce alkaline secretion (60-70% of semen) rich in <b>Fructose</b> (energy source for sperm motility), prostaglandins, and clotting proteins.
        <br/>&bull; <i>Prostate Gland (Single):</i> Secretes milky, slightly alkaline fluid (20-30% of semen) containing calcium, citrate, and profibrinolysin.
        <br/>&bull; <i>Bulbourethral / Cowper's Glands (Paired):</i> Secrete clear, alkaline mucus that lubricates the glans penis and neutralizes residual acidic urine in urethra before ejaculation.
      </li>
    </ul>
  </div>

  <h3 style="color: #FF3D00; margin-top: 22px; font-size: 16.5px;">(ii) Female Reproductive System</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 61, 0, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #FF3D00;">Ovaries &amp; Microscopic Anatomy:</b> Primary female sex organs producing female gametes (ova) and steroid hormones (Estrogen and Progesterone). Composed of peripheral ovarian cortex (containing follicles at various stages of maturity) and inner vascular medulla.
        <br/>&bull; <i>Folliculogenesis:</i> Primary follicle &rarr; Secondary follicle &rarr; Tertiary follicle (characterized by fluid-filled cavity <b>Antrum</b> and theca interna/externa) &rarr; Mature <b>Graafian Follicle</b>.
        <br/>&bull; <i>Corpus Luteum:</i> Endocrine body formed from collapsed Graafian follicle following ovulation; secretes abundant <b>Progesterone</b> to maintain pregnancy. Degenerates into fibrous <b>Corpus Albicans</b> if fertilization fails.
      </li>
      <li><b style="color: #FF3D00;">Fallopian Tubes (Oviducts, 10-12 cm long):</b>
        <br/>&bull; <i>Infundibulum:</i> Funnel-shaped terminal part with finger-like <b>fimbriae</b> that capture the ovulated secondary oocyte.
        <br/>&bull; <i>Ampulla:</i> Wide, thin-walled curved region; the primary anatomical site of <b>Fertilization</b>.
        <br/>&bull; <i>Isthmus:</i> Narrow, thick-walled segment joining the uterus.
      </li>
      <li><b style="color: #FF3D00;">Uterus (Womb):</b> Inverted pear-shaped organ consisting of Fundus, Body, and Cervix. Uterine wall possesses three layers:
        <br/>&bull; <i>Perimetrium:</i> Outer thin serous membrane.
        <br/>&bull; <i>Myometrium:</i> Thick middle layer of smooth muscle; undergoes powerful oxytocin-induced contractions during parturition.
        <br/>&bull; <i>Endometrium:</i> Inner highly vascular glandular mucosal layer that undergoes cyclic cyclical changes during the menstrual cycle and supports blastocyst implantation.
      </li>
      <li><b style="color: #FF3D00;">Mammary Glands (Breasts):</b> Paired secondary sexual organs consisting of glandular tissue and variable adipose fat. Glandular tissue is divided into 15–20 mammary lobes containing clusters of milk-secreting <b>alveoli</b> &rarr; mammary tubules &rarr; mammary ducts &rarr; ampulla &rarr; lactiferous ducts terminating at nipple.</li>
    </ul>
  </div>

  <h3 style="color: #FF3D00; margin-top: 22px; font-size: 16.5px;">(iii) Gametogenesis: Spermatogenesis vs Oogenesis</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 61, 0, 0.25); border-radius: 10px; padding: 14px 16px;">
      <h4 style="color: #FF3D00; margin: 0 0 8px 0; font-size: 15.5px;">🧬 Spermatogenesis (Continuous from Puberty)</h4>
      <p style="margin: 0; font-size: 14px; line-height: 1.6;">
        Initiates at puberty due to hypothalamic GnRH release:
        <br/>1. <b style="color: #FF3D00;">Multiplication Phase:</b> Spermatogonia (2n=46) divide mitotically.
        <br/>2. <b style="color: #FF3D00;">Growth Phase:</b> Differentiate into Primary Spermatocytes (2n).
        <br/>3. <b style="color: #FF3D00;">Maturation Phase:</b> Primary spermatocyte undergoes Meiosis I &rarr; 2 Secondary Spermatocytes (n=23) &rarr; Meiosis II &rarr; 4 equal haploid <b>Spermatids</b> (n).
        <br/>4. <b style="color: #FF3D00;">Spermiogenesis:</b> Spermatids transform into flagellated <b>Spermatozoa</b>.
        <br/><b style="color: #FF3D00;">Sperm Structure:</b> Head (haploid nucleus + Acrosome with hyaluronidase), Neck (proximal centriole), Middle Piece (mitochondrial spiral / Nebenkern yielding ATP), and Tail (axial filament).
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 61, 0, 0.25); border-radius: 10px; padding: 14px 16px;">
      <h4 style="color: #FF3D00; margin: 0 0 8px 0; font-size: 15.5px;">🥚 Oogenesis (Discontinuous from Embryonic Life)</h4>
      <p style="margin: 0; font-size: 14px; line-height: 1.6;">
        Initiates during embryonic development; no oogonia formed after birth:
        <br/>1. Oogonia (2n) enter Meiosis I and get arrested at <b>Diplotene of Prophase I</b> as Primary Oocytes (2n).
        <br/>2. At puberty, under FSH surge, primary oocyte completes Meiosis I unequal division &rarr; Large <b>Secondary Oocyte (n)</b> + tiny <b>First Polar Body</b>.
        <br/>3. Secondary oocyte begins Meiosis II but is arrested at <b>Metaphase II</b> until sperm entry.
        <br/>4. Ovulation releases secondary oocyte.
        <br/>5. Upon fertilization, sperm entry induces completion of Meiosis II &rarr; Haploid <b>Ovum (Ootid, n)</b> + Second Polar Body.
      </p>
    </div>
  </div>

  <h3 style="color: #FF3D00; margin-top: 22px; font-size: 16.5px;">(iv) Menstrual Cycle (Endocrine Orchestration)</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 61, 0, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ol style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #FF3D00;">1. Menstrual Phase (Days 1–5):</b> Triggered by the abrupt decline in progesterone and estrogen due to degeneration of corpus luteum. Endometrial lining sloughs off, resulting in menstrual flow (blood, tissue fluid, unfertilized ovum) through vagina.</li>
      <li><b style="color: #FF3D00;">2. Follicular / Proliferative Phase (Days 6–13):</b> Pituitary FSH stimulates growth of primary follicles into mature Graafian follicles. Growing follicles secrete increasing quantities of <b>Estrogen</b>, which stimulates rapid proliferation and thickening of the uterine endometrium.</li>
      <li><b style="color: #FF3D00;">3. Ovulatory Phase (Day 14):</b> Both LH and FSH reach peak levels at mid-cycle. Rapid surge in LH (<b>LH Surge</b>) induces the rupture of the mature Graafian follicle, releasing the secondary oocyte into the pelvic cavity (<b>Ovulation</b>).</li>
      <li><b style="color: #FF3D00;">4. Luteal / Secretory Phase (Days 15–28):</b> Ruptured Graafian follicle transforms into the <b>Corpus Luteum</b> under LH stimulation. Corpus luteum secretes massive amounts of <b>Progesterone</b>, which transforms the endometrium into a lush, secretory lining essential for blastocyst implantation. In absence of fertilization, corpus luteum regresses into corpus albicans, initiating the next cycle.</li>
    </ol>
  </div>

  <h3 style="color: #FF3D00; margin-top: 22px; font-size: 16.5px;">(v) Fertilization, Cleavage, Blastocyst &amp; Implantation</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF3D00;">Fertilization:</b> Insemination deposits ~200–300 million sperms in the vagina. Sperms undergo <b>Capacitation</b> in female genital tract, swim through cervix to the <b>ampulla of fallopian tube</b>. Acrosomal enzymes (hyaluronidase, acrosin) digest corona radiata and bind ZP3 receptors on the <b>Zona Pellucida</b>. Sperm binding triggers the <b>Cortical Reaction</b> (exocytosis of cortical granules), hardening the zona pellucida to create a permanent block to polyspermy. Sperm nucleus enters, triggering completion of Meiosis II in oocyte, followed by amphimixis to form a diploid <b>Zygote (2n=46)</b>.</li>
    <li><b style="color: #FF3D00;">Cleavage &amp; Morula:</b> Zygote undergoes rapid mitotic holoblastic cleavages (2 	o 4 	o 8 	o 16	ext{ blastomeres}) moving through oviduct. The solid sphere of 8–16 blastomeres is the <b>Morula</b>.</li>
    <li><b style="color: #FF3D00;">Blastocyst Formation &amp; Implantation:</b> Morula transforms into a hollow sphere called the <b>Blastocyst</b> (Day 5–6), containing an outer cell layer called the <b>Trophoblast</b> and an <b>Inner Cell Mass (ICM / Embryoblast)</b> containing pluripotent embryonic stem cells. On Day 7 postpartum, the trophoblast layer attaches to the endometrial epithelium; endometrial cells divide and cover the blastocyst completely (<b>Implantation</b>), establishing pregnancy.</li>
  </ul>

  <h3 style="color: #FF3D00; margin-top: 22px; font-size: 16.5px;">(vi) Pregnancy, Placenta, Parturition &amp; Lactation</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF3D00;">Placenta:</b> Trophoblast develops vascular finger-like projections called <b>Chorionic Villi</b>, which interdigitate with maternal uterine tissue to form the placenta. Connected to the embryo via the <b>Umbilical Cord</b>.
      <br/>&bull; <i>Transport:</i> Supplies O_2 and nutrients; eliminates fetal CO_2 and urea.
      <br/>&bull; <i>Endocrine Secretion:</i> Synthesizes <b>hCG</b> (human Chorionic Gonadotropin - basis of urine pregnancy test kits), <b>hPL</b> (human Placental Lactogen), <b>Estrogens</b>, and <b>Progesterone</b>. In late pregnancy, the ovary and placenta also secrete <b>Relaxin</b> (softens pubic symphysis).
    </li>
    <li><b style="color: #FF3D00;">Parturition (Childbirth):</b> Complex neuroendocrine process. The fully mature fetus and placenta send signals initiating mild uterine contractions termed the <b>Foetal Ejection Reflex</b>. This triggers the release of <b>Oxytocin</b> from maternal posterior pituitary, which stimulates powerful contractions of the myometrium. A positive feedback loop intensifies contractions until the infant is expelled through the birth canal (cervix and vagina).</li>
    <li><b style="color: #FF3D00;">Lactation:</b> Under the influence of <b>Prolactin</b> (anterior pituitary), mammary alveolar cells synthesize milk. Suckling stimulates oxytocin release from posterior pituitary, causing myoepithelial cell contraction for milk ejection (<b>Milk Ejection Reflex</b>). The first milk produced is <b>Colostrum</b>, rich in <b>Secretory IgA antibodies</b> conferring vital passive immunity to the newborn.</li>
  </ul>

  <!-- SECTION 2: REPRODUCTIVE HEALTH -->
  <h2 style="color: #FF3D00; border-bottom: 2px solid #FF3D00; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    2. Reproductive Health: STDs, Contraception, MTP, Amniocentesis &amp; ART
  </h2>

  <h3 style="color: #FF3D00; margin-top: 18px; font-size: 16.5px;">(i) Sexually Transmitted Diseases (STDs / STIs)</h3>
  <p>
    Diseases or infections transmitted through sexual intercourse are called <b>Sexually Transmitted Infections (STIs)</b> or <b>Venereal Diseases (VD)</b>:
  </p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF3D00;">Bacterial STDs:</b> Gonorrhoea (<i>Neisseria gonorrhoeae</i>), Syphilis (<i>Treponema pallidum</i>), Chlamydiasis (<i>Chlamydia trachomatis</i>).</li>
    <li><b style="color: #FF3D00;">Viral STDs:</b> Genital herpes (HSV-2), Genital warts (Human Papillomavirus / HPV), Hepatitis B, HIV/AIDS. <i>Note:</i> Hepatitis B, Genital Herpes, and HIV infections are non-curable.</li>
    <li><b style="color: #FF3D00;">Protozoan STDs:</b> Trichomoniasis (<i>Trichomonas vaginalis</i>).</li>
    <li><b style="color: #FF3D00;">Prevention:</b> Avoid sex with unknown/multiple partners, consistent use of condoms, and seeking early medical consultation for symptoms (itching, fluid discharge, sores).</li>
  </ul>

  <h3 style="color: #FF3D00; margin-top: 22px; font-size: 16.5px;">(ii) Contraceptive Methods &amp; Birth Control</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 61, 0, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ol style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #FF3D00;">1. Natural / Traditional Methods:</b>
        <br/>&bull; <i>Periodic Abstinence:</i> Avoiding coitus from Day 10 to 17 of menstrual cycle (fertile window when ovulation is expected).
        <br/>&bull; <i>Coitus Interruptus (Withdrawal):</i> Withdrawal of penis from vagina before ejaculation.
        <br/>&bull; <i>Lactational Amenorrhea:</i> Absence of menstruation during intense breastfeeding due to high prolactin suppressing gonadotropins (effective up to 6 months postpartum).
      </li>
      <li><b style="color: #FF3D00;">2. Barrier Methods:</b>
        <br/>&bull; <i>Condoms:</i> Latex sheaths for male (Nirodh) or female (Femidom) that prevent sperm deposition in vagina and provide dual protection against STDs/HIV.
        <br/>&bull; <i>Diaphragms, Cervical Caps &amp; Vaults:</i> Reusable rubber barriers inserted into female tract to cover cervix; used with spermicidal jellies.
      </li>
      <li><b style="color: #FF3D00;">3. Intrauterine Devices (IUDs):</b> Inserted into uterine cavity by doctors:
        <br/>&bull; <i>Non-medicated IUDs:</i> Lippes loop (increases phagocytosis of sperms).
        <br/>&bull; <i>Copper-releasing IUDs (CuT, Cu7, Multiload 375):</i> Released Cu<sup>2+</sup> ions suppress sperm motility and fertilizing capacity.
        <br/>&bull; <i>Hormone-releasing IUDs (Progestasert, LNG-20):</i> Make uterus unsuitable for implantation and cervix hostile to sperms.
      </li>
      <li><b style="color: #FF3D00;">4. Oral Contraceptive Pills:</b>
        <br/>&bull; Daily hormonal combinations (Estrogen + Progesterone) that inhibit ovulation and implantation.
        <br/>&bull; <b style="color: #FF3D00;">Saheli:</b> Once-a-week non-steroidal oral pill developed by CDRI Lucknow (Centchroman) with high contraceptive efficacy and minimal side effects.
      </li>
      <li><b style="color: #FF3D00;">5. Surgical Methods (Sterilization):</b> Irreversible, terminal methods:
        <br/>&bull; <i>Vasectomy (Males):</i> Small segment of vas deferens is cut and tied off through small scrotum incision.
        <br/>&bull; <i>Tubectomy (Females):</i> Small part of fallopian tubes is excised and ligated through abdominal incision.
      </li>
    </ol>
  </div>

  <h3 style="color: #FF3D00; margin-top: 22px; font-size: 16.5px;">(iii) MTP, Amniocentesis &amp; Assisted Reproductive Technologies (ART)</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF3D00;">Medical Termination of Pregnancy (MTP):</b> Voluntary termination of pregnancy before full term (induced abortion). Legalized in India in 1971 under strict conditions to prevent misuse. Safe during the <b>first trimester (up to 12 weeks)</b>. MTP Amendment Act (2021) allows termination up to 24 weeks for specific vulnerable categories (rape survivors, severe fetal abnormalities) on medical opinion.</li>
    <li><b style="color: #FF3D00;">Amniocentesis:</b> Prenatal diagnostic technique where amniotic fluid containing fetal cells is aspirated trans-abdominally to examine chromosomal karyotype for genetic defects (Down syndrome, Klinefelter syndrome, Turner syndrome, Sickle-cell anemia). Banned legally in India under PCPNDT Act to prevent female foeticide.</li>
    <li><b style="color: #FF3D00;">Infertility &amp; ART Techniques:</b> Inability to conceive after 1–2 years of unprotected coitus:
      <br/>&bull; <b style="color: #FF3D00;">IVF (In Vitro Fertilization):</b> Ova from female and sperms from male are fertilized in laboratory dish under sterile conditions (Test-Tube Baby programme).
      <br/>&bull; <b style="color: #FF3D00;">ZIFT (Zygote Intra-Fallopian Transfer):</b> Zygote or early embryo up to 8 blastomeres transferred into fallopian tube.
      <br/>&bull; <b style="color: #FF3D00;">IUT (Intra-Uterine Transfer):</b> Embryo with >8 blastomeres transferred directly into the uterus.
      <br/>&bull; <b style="color: #FF3D00;">GIFT (Gamete Intra-Fallopian Transfer):</b> Transfer of collected unfertilized ovum into fallopian tube of female who cannot produce ovum but can support fertilization and gestation.
      <br/>&bull; <b style="color: #FF3D00;">ICSI (Intra-Cytoplasmic Sperm Injection):</b> Single sperm is microinjected directly into the cytoplasm of an ovum in laboratory.
      <br/>&bull; <b style="color: #FF3D00;">IUI (Intra-Uterine Insemination):</b> Semen collected from husband or donor is artificially introduced into the uterus of female (used for low sperm count / oligozoospermia).
    </li>
  </ul>

  <!-- MASTER REVISION CHEAT SHEET -->
  <div style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(74, 14, 4, 0.85)); border: 2px solid #FF3D00; border-radius: 12px; padding: 20px; margin-top: 35px; box-shadow: 0 6px 25px rgba(0,0,0,0.4);">
    <h3 style="color: #FF3D00; margin: 0 0 14px 0; font-size: 18px; text-align: center; font-weight: bold;">
      ⚡ Master Zoology Chapter 1: Reproductive Biology &amp; ART Cheat Sheet
    </h3>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13.5px;">
        <thead>
          <tr style="background: rgba(255, 61, 0, 0.25); color: #FF3D00; font-weight: bold;">
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Structure / Technology</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Origin / Hormone / Mechanism</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Key Physiological / Clinical Function</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF3D00;">Sertoli Cells:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">FSH stimulated (Testis)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Nourish developing spermatids; secrete ABP and Inhibin</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF3D00;">Leydig Cells:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">LH stimulated (Testis)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Synthesize and secrete Testosterone androgens</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF3D00;">Corpus Luteum:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">LH stimulated (Ovary)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Secretes high Progesterone to maintain uterine endometrium</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF3D00;">Acrosome:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Golgi apparatus derivative</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Releases Hyaluronidase &amp; Acrosin for sperm penetration</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF3D00;">hCG (Placenta):</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Trophoblast of blastocyst</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Maintains corpus luteum; marker for pregnancy detection tests</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF3D00;">Oxytocin:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Posterior Pituitary</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Induces uterine contractions (Parturition) &amp; milk ejection</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF3D00;">Copper IUDs (CuT):</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Intrauterine device</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Releases Cu<sup>2+</sup> ions &rarr; suppresses sperm motility &amp; fertilization</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF3D00;">Saheli:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">CDRI Lucknow (Centchroman)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Non-steroidal once-a-week oral contraceptive pill</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF3D00;">ZIFT:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">ART procedure</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Transfer of zygote/early embryo (&le; 8 blastomeres) into fallopian tube</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF3D00;">ICSI:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Micromanipulation ART</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Direct microinjection of single sperm into cytoplasm of ovum</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
`;

export const c12Zoo1HtmlSolutions = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- SECTION A -->
  <div style="background: linear-gradient(135deg, rgba(255, 61, 0, 0.15), rgba(213, 0, 0, 0.15)); border: 1.5px solid rgba(255, 61, 0, 0.4); border-radius: 12px; padding: 16px 20px; margin-bottom: 24px;">
    <h2 style="color: #FF3D00; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION A: Very Short Answer (VSA) Questions (1 Mark Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q1 to Q40 &bull; Anatomical Terms, Cell Types, Hormones &amp; ART Acronyms</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q1: Why are human testes located outside the abdominal cavity in the scrotum?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      To maintain a scrotal temperature 2–2.5&deg;C lower than internal body temperature, which is essential for viable spermatogenesis.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q2: What is the function of Leydig cells in the testis?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Leydig cells synthesize and secrete male androgenic hormones, principally Testosterone, under LH stimulation.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q3: Name the two cell types lining the inside of seminiferous tubules.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Male germ cells (spermatogonia) and Sertoli cells (nurse cells).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q4: State two functions of Sertoli cells.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Provide nutrition and mechanical support to developing spermatids. 2. Secrete Androgen Binding Protein (ABP) and Inhibin.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q5: Name the three male accessory sex glands.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Seminal vesicles (paired), Prostate gland (single), and Bulbourethral / Cowper's glands (paired).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q6: What is the main sugar component present in seminal vesicle secretions?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Fructose (provides metabolic energy for sperm motility).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q7: What is the function of Bulbourethral / Cowper's glands?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      They secrete clear alkaline mucus that lubricates the glans penis and neutralizes acidic urine traces in urethra.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q8: Name the anatomical site of fertilization in the human female reproductive tract.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The ampulla of the Fallopian tube (oviduct).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q9: What are Fimbriae and what is their role?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Finger-like projections at the terminal rim of the infundibulum that collect the ovulated secondary oocyte from the ovary.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q10: Name the three layers of the uterine wall.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Perimetrium (outer serous), Myometrium (middle smooth muscle), and Endometrium (inner glandular vascular mucosal layer).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q11: Which layer of the uterus undergoes cyclic cyclical breakdown during menstruation?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The Endometrium.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q12: Which uterine wall layer contracts powerfully during childbirth (parturition)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The Myometrium (under oxytocin stimulation).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q13: Define Spermiogenesis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The morphological transformation of non-motile haploid spermatids into flagellated, motile spermatozoa.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q14: What is Spermiation?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The release of mature spermatozoa from the Sertoli cells into the lumen of seminiferous tubules.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q15: What is the role of the Acrosome in a human sperm?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The acrosome contains hydrolytic enzymes (hyaluronidase, corona penetrating enzyme, acrosin) that digest egg envelopes during fertilization.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q16: Which organelle is arranged in a spiral (Nebenkern) in the sperm middle piece?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Mitochondria (synthesize ATP to power flagellar tail movements).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q17: At what stage of cell division is oogenesis arrested in a female infant at birth?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      At the Diplotene stage of Prophase I of Meiosis I.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q18: What is an Antrum in an ovarian follicle?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A fluid-filled follicular cavity characteristic of the tertiary and mature Graafian follicle.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q19: What triggers the completion of Meiosis II in a secondary oocyte?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The entry of the sperm head through the zona pellucida into the oocyte cytoplasm at fertilization.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q20: What is Corpus Luteum and what is its primary endocrine secretion?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A temporary endocrine structure formed from the ruptured Graafian follicle that secretes abundant Progesterone.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q21: What is the cause of bleeding during the Menstrual phase?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The sudden withdrawal and decline of progesterone and estrogen levels due to degeneration of the corpus luteum.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q22: What is LH Surge?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A sharp mid-cycle (day 14) spike in Luteinizing Hormone (LH) levels that triggers ovulation.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q23: What is Capacitation of sperm?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The physiological conditioning of sperms in the female reproductive tract enabling them to undergo the acrosomal reaction.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q24: What is the Cortical Reaction during fertilization?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Exocytosis of cortical granules beneath the oocyte membrane that alters the zona pellucida, permanently preventing polyspermy.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q25: What is a Morula?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A solid sphere of 8 to 16 blastomeres produced by mitotic cleavage of the zygote.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q26: Name the two distinct cell layers of a human Blastocyst.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The outer Trophoblast layer and the Inner Cell Mass (ICM / Embryoblast).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q27: Which layer of the blastocyst attaches to the endometrium during Implantation?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The Trophoblast layer.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q28: What are embryonic stem cells and where are they located in the blastocyst?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Pluripotent cells with the potency to give rise to all tissues/organs, located within the Inner Cell Mass (ICM).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q29: Name the hormone tested in commercial urine pregnancy test kits.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      human Chorionic Gonadotropin (hCG).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q30: Name two hormones produced exclusively during pregnancy by the human placenta.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      human Chorionic Gonadotropin (hCG) and human Placental Lactogen (hPL).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q31: What is the Foetal Ejection Reflex?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Mild uterine contractions initiated by the fully developed fetus and placenta that trigger maternal oxytocin secretion for parturition.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q32: Which pituitary hormone induces milk ejection from mammary glands?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Oxytocin (milk let-down hormone from posterior pituitary).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q33: Which pituitary hormone stimulates milk synthesis in mammary alveoli?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Prolactin (from anterior pituitary).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q34: What is Colostrum and which antibody is predominantly present in it?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The first yellowish milk produced during initial days postpartum, rich in Secretory IgA antibodies.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q35: Give two examples of incurable viral Sexually Transmitted Infections (STIs).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Hepatitis B and HIV/AIDS (also Genital Herpes).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q36: Name the bacterium that causes Syphilis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Treponema pallidum</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q37: What is Lactational Amenorrhea?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Natural temporary absence of menstruation during intense breastfeeding due to high prolactin suppressing GnRH and LH.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q38: How do Copper-releasing IUDs (e.g., CuT) prevent conception?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Released Cu<sup>2+</sup> ions suppress sperm motility, viability, and fertilizing capacity.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q39: What is 'Saheli' and where was it developed?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A non-steroidal, once-a-week oral contraceptive pill (Centchroman) developed by CDRI Lucknow.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q40: Expand the acronyms IVF, ZIFT, and GIFT.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      IVF: In Vitro Fertilization; ZIFT: Zygote Intra-Fallopian Transfer; GIFT: Gamete Intra-Fallopian Transfer.
    </div>
  </div>

  <!-- SECTION B -->
  <div style="background: linear-gradient(135deg, rgba(255, 61, 0, 0.15), rgba(213, 0, 0, 0.15)); border: 1.5px solid rgba(255, 61, 0, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #FF3D00; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION B: Short Answer (SA) Questions (2 &amp; 3 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q41 to Q80 &bull; Spermatogenesis vs Oogenesis, Menstrual Cycle, IUDs &amp; Contraception</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q41: Describe the pathway of sperm transport from seminiferous tubules to outside.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Seminiferous tubules &rarr; <i>Rete testis</i> &rarr; <i>Vasa efferentia</i> &rarr; <i>Epididymis</i> (storage &amp; maturation) &rarr; <i>Vas deferens</i> &rarr; <i>Ejaculatory duct</i> (receives seminal vesicle fluid) &rarr; <i>Prostatic &amp; Penile Urethra</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q42: Differentiate between Spermatogenesis and Oogenesis on four key parameters.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF3D00;">Spermatogenesis:</b> Continuous from puberty; 1 spermatocyte yields 4 functional spermatozoa; no polar bodies formed; continuous throughout lifetime. <b style="color: #FF3D00;">Oogenesis:</b> Initiated in embryonic life and ceases at menopause; 1 primary oocyte yields 1 ovum + 2 polar bodies; arrested at Prophase I and Metaphase II.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q43: Explain the hormonal regulation of Spermatogenesis in human males.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Hypothalamus secretes <b style="color: #FF3D00;">GnRH</b> &rarr; stimulates Anterior Pituitary &rarr; secretes <b style="color: #FF3D00;">LH</b> and <b style="color: #FF3D00;">FSH</b>. LH stimulates Leydig cells to secrete Testosterone (which drives spermatogenesis); FSH acts on Sertoli cells to secrete factors essential for spermiogenesis.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q44: Describe the structural components of a mature human Spermatozoon.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF3D00;">Head:</b> Contains elongated haploid nucleus capped by enzyme-rich <b>Acrosome</b>. 2. <b style="color: #FF3D00;">Neck:</b> Contains proximal centriole (initiates zygote cleavage). 3. <b style="color: #FF3D00;">Middle Piece:</b> Packed with spiraled mitochondria (Nebenkern) generating ATP. 4. <b style="color: #FF3D00;">Tail:</b> Central axoneme surrounded by sheath, executing whip-like propulsion.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q45: Explain the structural and hormonal changes in Ovary during the Follicular phase.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Under pituitary FSH stimulation, primary follicles develop through secondary into tertiary and mature Graafian follicles with fluid-filled antra. The theca interna cells synthesize Estrogens, which circulate to stimulate endometrial proliferation in the uterus.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q46: Describe the role of LH Surge in human reproduction.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      At mid-cycle (~Day 14), LH levels reach a maximum peak (LH Surge), which stimulates rapid growth and final maturation of the Graafian follicle, leading to rupture of follicular wall and release of secondary oocyte (Ovulation).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q47: What is Corpus Luteum? What happens to it if fertilization does or does not occur?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Corpus luteum is the yellowish endocrine structure formed from ruptured Graafian follicle. (1) <b style="color: #FF3D00;">If pregnancy occurs:</b> Maintained by hCG, secretes progesterone throughout gestation. (2) <b style="color: #FF3D00;">If fertilization fails:</b> Regresses in 14 days to fibrous Corpus Albicans; progesterone drops, triggering menstruation.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q48: Explain the biochemical mechanisms that prevent Polyspermy at Fertilization.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF3D00;">Fast Block:</b> Rapid electrical depolarization of oocyte plasma membrane upon sperm contact. 2. <b style="color: #FF3D00;">Slow Block (Cortical Reaction):</b> Intracellular Ca<sup>2+</sup> wave triggers exocytosis of cortical granules beneath oolemma, enzymatically hardening the zona pellucida and destroying ZP3 receptors.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q49: Describe the sequence of embryonic cleavage from Zygote to Blastocyst.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Zygote (2n) undergoes rapid mitotic holoblastic divisions while traveling through fallopian tube: Day 1 (2-cell) &rarr; Day 2 (4-cell) &rarr; Day 3 (8-cell) &rarr; Day 4 (16-cell solid <b>Morula</b>) &rarr; Day 5–6 (cavitation produces <b>Blastocyst</b> with outer trophoblast and inner cell mass).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q50: Explain the process of Implantation of Blastocyst in the uterine wall.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Around Day 7 after fertilization, the blastocyst reaches the uterus. The outer trophoblast layer secretes lytic enzymes that digest uterine endometrial surface, allowing the blastocyst to embed deeply. Endometrial cells rapidly divide, completely enveloping the blastocyst.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q51: Explain the endocrine functions of human Placenta.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The placenta acts as a vital temporary endocrine organ secreting: (1) <b style="color: #FF3D00;">hCG:</b> Maintains corpus luteum and progesterone secretion. (2) <b style="color: #FF3D00;">hPL:</b> Stimulates fetal growth and maternal mammary development. (3) <b style="color: #FF3D00;">Estrogens &amp; Progesterone:</b> Maintain uterine quiescence and pregnancy. (4) <b style="color: #FF3D00;">Relaxin:</b> Facilitates pelvic ligament relaxation during labor.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q52: Describe the neuroendocrine mechanism of Parturition (Childbirth).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Parturition is triggered by the <b style="color: #FF3D00;">Foetal Ejection Reflex</b>: fully developed fetus and placenta initiate mild uterine contractions &rarr; signals maternal hypothalamus &rarr; posterior pituitary releases <b style="color: #FF3D00;">Oxytocin</b> &rarr; induces stronger myometrial contractions &rarr; positive feedback amplifies oxytocin release until expulsion.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q53: Explain the immunological and nutritional importance of Colostrum.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Colostrum is the first milk produced during the initial 2–3 days of lactation. It is low in fat but exceptionally rich in proteins, minerals, and <b>Secretory IgA antibodies</b> that coat the infant's gut lining, providing essential passive immunity against pathogens.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q54: List four common Sexually Transmitted Infections (STIs) and their causative agents.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF3D00;">Gonorrhoea:</b> <i>Neisseria gonorrhoeae</i> (bacterium). 2. <b style="color: #FF3D00;">Syphilis:</b> <i>Treponema pallidum</i> (bacterium). 3. <b style="color: #FF3D00;">Genital Herpes:</b> Herpes Simplex Virus 2 (HSV-2). 4. <b style="color: #FF3D00;">Trichomoniasis:</b> <i>Trichomonas vaginalis</i> (protozoan).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q55: Why are condoms considered an ideal barrier contraceptive method?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Non-invasive, user-friendly, and self-insertable. 2. Highly effective in preventing unintended pregnancy. 3. Provides crucial dual protection by preventing transmission of STDs, Hepatitis B, and HIV/AIDS. 4. Zero hormonal side effects.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q56: Differentiate between Non-medicated, Copper-releasing, and Hormone-releasing IUDs with examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF3D00;">Non-medicated:</b> Lippes loop; promotes phagocytosis of sperms in uterus. <b style="color: #FF3D00;">Copper-releasing:</b> CuT, Cu7, Multiload 375; Cu<sup>2+</sup> suppresses sperm motility and fertilizing power. <b style="color: #FF3D00;">Hormone-releasing:</b> Progestasert, LNG-20; makes uterus unsuitable for implantation and thickens cervical mucus.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q57: Explain the mechanism of action of Oral Contraceptive Pills.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Daily pills containing synthetic estrogen and progesterone act by: (1) Inhibiting pituitary secretion of FSH and LH, preventing follicular development and ovulation. (2) Altering endometrial lining to prevent blastocyst implantation. (3) Thickening cervical mucus plug to prevent sperm entry.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q58: Differentiate between Vasectomy and Tubectomy surgical sterilization.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF3D00;">Vasectomy (Male):</b> A small incision is made in the scrotum; both vasa deferentia are cut and tied off to prevent sperm release in semen. <b style="color: #FF3D00;">Tubectomy (Female):</b> Fallopian tubes are cut and ligated through abdominal/vaginal incision to prevent ovum transport and fertilization.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q59: What is Medical Termination of Pregnancy (MTP)? When is it considered safe?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      MTP is the voluntary termination of pregnancy before term using medications or surgical evacuation. It is safest during the <b style="color: #FF3D00;">First Trimester (up to 12 weeks)</b> of gestation. Beyond 12 weeks (second trimester), risks of maternal hemorrhage and complications increase significantly.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q60: Explain Amniocentesis: Principle, diagnostic uses, and statutory ban in India.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF3D00;">Principle:</b> Trans-abdominal aspiration of amniotic fluid to analyze cultured fetal cells for chromosomal karyotypes. <b style="color: #FF3D00;">Uses:</b> Detects Down syndrome, Klinefelter syndrome, sickle-cell anemia. <b style="color: #FF3D00;">Ban:</b> Misused for prenatal sex determination leading to female foeticide, hence legally banned under PCPNDT Act.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q61: Explain In Vitro Fertilization (IVF) and Test-Tube Baby programme.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In IVF, mature ova harvested from the female and sperms from the male are co-incubated in laboratory culture dishes under controlled physiological conditions. Following successful fertilization, the early embryo is transferred into the female tract via ZIFT or IUT.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q62: Differentiate between ZIFT (Zygote Intra-Fallopian Transfer) and IUT (Intra-Uterine Transfer).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF3D00;">ZIFT:</b> Zygote or early cleavage embryo with up to 8 blastomeres is transferred directly into the fallopian tube. <b style="color: #FF3D00;">IUT:</b> Advanced embryo with more than 8 blastomeres (e.g., morula or blastocyst) is transferred directly into the uterine cavity.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q63: Explain Gamete Intra-Fallopian Transfer (GIFT).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      GIFT involves harvesting a viable unfertilized ovum from a fertile donor female and transferring it into the fallopian tube of an infertile recipient female along with husband's sperms, allowing natural internal fertilization and development to take place in vivo.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q64: What is Intra-Cytoplasmic Sperm Injection (ICSI)? In which clinical cases is it indicated?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      ICSI is an advanced micromanipulation technique where a single chosen sperm is injected directly into the cytoplasm of an ovum in vitro. Indicated in severe male factor infertility (severe oligozoospermia, asthenozoospermia, or azoospermia with testicular sperm aspiration).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q65: Explain Artificial Insemination (AI) and Intra-Uterine Insemination (IUI).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In AI/IUI, semen collected from the husband or a healthy donor is concentrated, washed, and artificially introduced directly into the female's vagina or uterine cavity (IUI) at the time of ovulation, overcoming male erectile or low sperm count issues.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q66: Why is breastfeeding recommended by doctors immediately after delivery?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Breast milk provides optimal balanced nutrition, is easily digestible, and supplies maternal Secretory IgA antibodies (in colostrum) that establish infant gut immunity and promote psychological bonding between mother and infant.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q67: Describe the histological structure of a mature Graafian Follicle.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A mature Graafian follicle consists of: (1) Primary/Secondary oocyte surrounded by <b>Zona Pellucida</b> and <b>Corona Radiata</b>. (2) Fluid-filled cavity called the <b>Antrum</b>. (3) Inner vascular <b>Theca Interna</b> (secretes estrogen) and outer fibrous <b>Theca Externa</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q68: Explain the role of Proximal Centriole of sperm in zygote division.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The secondary oocyte lacks a functioning centriole. The sperm's proximal centriole enters the oocyte at fertilization and forms the mitotic spindle apparatus necessary for the first cleavage division of the diploid zygote.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q69: Describe the composition of Human Seminal Plasma.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Seminal plasma is the collective fluid secretion of seminal vesicles (60%), prostate gland (30%), and bulbourethral glands (5%). It is rich in Fructose, Prostaglandins, Calcium, Citrate, and Clotting enzymes, providing an alkaline, nutrient-rich transport medium.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q70: Explain how high levels of Estrogen and Progesterone prevent ovulation during pregnancy.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      High circulating concentrations of estrogen and progesterone secreted by corpus luteum and placenta exert strong negative feedback on the hypothalamus and anterior pituitary, completely suppressing GnRH, FSH, and LH secretion, preventing new follicular development.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q71: What are the causes of Infertility in human males and females?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF3D00;">Males:</b> Low sperm count (oligozoospermia), poor sperm motility (asthenozoospermia), abnormal sperm morphology, erectile dysfunction, blocked vas deferens. <b style="color: #FF3D00;">Females:</b> Anovulation, polycystic ovarian syndrome (PCOS), blocked fallopian tubes, endometriosis, hostile cervical mucus.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q72: Explain the function of human Placental Lactogen (hPL).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      hPL is a protein hormone secreted by the syncytiotrophoblast of the placenta that alters maternal glucose and fatty acid metabolism, ensuring continuous glucose and amino acid availability for fetal nutrition, and stimulates mammary gland development.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q73: What are the primary symptoms of Sexually Transmitted Infections (STIs)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Early symptoms include burning urination, itching, fluid discharge from genital tract, genital ulcers/sores, pelvic pain, and swollen lymph nodes in groin. If left untreated, they can lead to Pelvic Inflammatory Disease (PID), ectopic pregnancies, and infertility.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q74: Describe the mechanism of action of 'Saheli' contraceptive pill.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Saheli (Centchroman / Ormeloxifene) is a Selective Estrogen Receptor Modulator (SERM). It binds to uterine estrogen receptors, antagonizing estrogenic actions, altering endometrial receptivity and oviductal motility, thereby preventing blastocyst implantation.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q75: Explain the difference between Menarche and Menopause.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF3D00;">Menarche:</b> The first onset of menstruation occurring at puberty (around 12–14 years of age) marking beginning of reproductive phase. <b style="color: #FF3D00;">Menopause:</b> The permanent cessation of menstrual cycles occurring around 45–50 years due to follicular exhaustion.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q76: What is the significance of the Blood-Testis Barrier?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Formed by tight junctions between adjacent Sertoli cells; prevents haploid spermatozoa (which express novel surface autoantigens) from coming in contact with systemic blood circulation, preventing autoimmune destruction of sperms.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q77: Explain the Milk Ejection Reflex (Let-down reflex).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Infant suckling stimulates tactile sensory receptors on nipple &rarr; nerve impulses travel to hypothalamus &rarr; posterior pituitary releases <b style="color: #FF3D00;">Oxytocin</b> &rarr; stimulates myoepithelial cells surrounding mammary alveoli to contract, forcing milk into lactiferous ducts.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q78: Describe the changes in the Uterine Endometrium during the Luteal phase.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Under the influence of high progesterone secreted by the corpus luteum, the endometrium becomes highly vascular, tortuous, and glandular (secretory endometrium), accumulating glycogen to nourish and support the impending blastocyst implantation.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q79: What is an Ectopic Pregnancy? Where does it commonly occur?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      An ectopic pregnancy occurs when the blastocyst implants outside the normal uterine cavity. Over 95% of ectopic implantations occur in the <b style="color: #FF3D00;">Ampulla or Isthmus of the Fallopian Tube</b> (Tubal Pregnancy), which requires emergency surgical termination.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q80: What are the criteria for an Ideal Contraceptive according to WHO?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      An ideal contraceptive must be: (1) User-friendly and easily accessible. (2) Highly effective with minimal or no adverse side effects. (3) Reversible without impairing future fertility. (4) Non-interfering with normal sexual drive or act.
    </div>
  </div>

  <!-- SECTION C -->
  <div style="background: linear-gradient(135deg, rgba(255, 61, 0, 0.15), rgba(213, 0, 0, 0.15)); border: 1.5px solid rgba(255, 61, 0, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #FF3D00; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION C: Long Answer (LA) Questions (5 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q81 to Q100 &bull; Master Reproductive Systems, Menstrual Orchestration &amp; Advanced ART</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q81: Describe the Male Reproductive System in detail: Testes anatomy, Seminiferous tubule histology, Ducts, and Accessory glands.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF3D00;">1. Testes &amp; Scrotum:</b> Pair of extra-abdominal gonads located in the scrotum, maintaining a temperature 2–2.5&deg;C below core body temperature for spermatogenesis. Each testis contains ~250 lobules with 1–3 seminiferous tubules.<br/><br/><b style="color: #FF3D00;">2. Histology:</b> Lined by spermatogonia (germ cells) and Sertoli cells (nurse cells providing nutrition, secreting ABP, inhibin, and forming blood-testis barrier). Interstitial Leydig cells synthesize testosterone under LH stimulation.<br/><br/><b style="color: #FF3D00;">3. Duct System:</b> Seminiferous tubules &rarr; Rete testis &rarr; Vasa efferentia &rarr; Epididymis (sperm maturation &amp; storage) &rarr; Vas deferens &rarr; Ejaculatory duct &rarr; Urethra.<br/><br/><b style="color: #FF3D00;">4. Accessory Glands:</b> Seminal vesicles (fructose, prostaglandins), Prostate (alkaline fluid, calcium), Bulbourethral glands (mucus lubricant).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q82: Describe the Female Reproductive System: Ovaries histology, Fallopian tubes, Uterus layers, and Mammary glands.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF3D00;">1. Ovaries &amp; Folliculogenesis:</b> Cortex contains follicles maturing from primary &rarr; secondary &rarr; tertiary (antrum) &rarr; Graafian follicle &rarr; Corpus Luteum (progesterone).<br/><br/><b style="color: #FF3D00;">2. Fallopian Tubes (Oviducts):</b> Infundibulum with fimbriae &rarr; Ampulla (site of fertilization) &rarr; Isthmus joining uterus.<br/><br/><b style="color: #FF3D00;">3. Uterus (Womb):</b> Three layers: Perimetrium (outer serous), Myometrium (middle smooth muscle for labor contractions), Endometrium (inner glandular vascular layer supporting implantation).<br/><br/><b style="color: #FF3D00;">4. Mammary Glands:</b> 15–20 glandular lobes with alveoli &rarr; mammary tubules &rarr; ducts &rarr; ampulla &rarr; lactiferous ducts at nipple.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q83: Explain Spermatogenesis vs Oogenesis with detailed comparative stages, chromosomal counts, and hormonal control.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF3D00;">1. Spermatogenesis:</b> Initiates at puberty; continuous; 1 Spermatogonium (2n) &rarr; Primary Spermatocyte (2n) &rarr; Meiosis I &rarr; 2 Secondary Spermatocytes (n) &rarr; Meiosis II &rarr; 4 Spermatids (n) &rarr; 4 functional flagellated Spermatozoa. Regulated by GnRH &rarr; LH (Leydig &rarr; Testosterone) + FSH (Sertoli factors).<br/><br/><b style="color: #FF3D00;">2. Oogenesis:</b> Initiates in embryonic life; arrested at Diplotene of Prophase I. At puberty, cyclic FSH triggers Meiosis I completion &rarr; 1 Secondary Oocyte (n) + 1st Polar Body. Arrested at Metaphase II until fertilization by sperm &rarr; 1 mature Ovum (n) + 2nd Polar Body. Regulated by GnRH &rarr; FSH (follicles &rarr; estrogen) + LH (ovulation &amp; corpus luteum &rarr; progesterone).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q84: Detail the Menstrual Cycle with phase-wise ovarian events, uterine changes, and hormonal profiles of FSH, LH, Estrogen, and Progesterone.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF3D00;">1. Menstrual Phase (Days 1–5):</b> Progesterone withdrawal &rarr; endometrial breakdown and bleeding (50–100 ml blood &amp; tissue fluid).<br/><br/><b style="color: #FF3D00;">2. Follicular Phase (Days 6–13):</b> FSH stimulates follicular growth; follicles secrete rising Estrogen &rarr; stimulates rapid endometrial proliferation and vascularization.<br/><br/><b style="color: #FF3D00;">3. Ovulatory Phase (Day 14):</b> Estrogen positive feedback triggers <b>LH Surge</b> &rarr; mature Graafian follicle ruptures, releasing secondary oocyte (Ovulation).<br/><br/><b style="color: #FF3D00;">4. Luteal Phase (Days 15–28):</b> LH transforms ruptured follicle into <b>Corpus Luteum</b> &rarr; secretes high Progesterone &rarr; transforms endometrium into secretory state. In absence of pregnancy, corpus luteum regresses &rarr; progesterone drops &rarr; next cycle.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q85: Describe Fertilization and the step-by-step events leading up to Blastocyst Implantation in the uterus.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF3D00;">1. Capacitation &amp; Acrosome Reaction:</b> Sperms conditioned in female tract; acrosome enzymes digest corona radiata and bind ZP3 on zona pellucida.<br/><br/><b style="color: #FF3D00;">2. Cortical Reaction:</b> Ca<sup>2+</sup> wave releases cortical granules, hardening zona pellucida to permanently block polyspermy.<br/><br/><b style="color: #FF3D00;">3. Syngamy:</b> Sperm nucleus enters oocyte &rarr; triggers completion of Meiosis II &rarr; haploid pronuclei fuse forming diploid Zygote (2n=46).<br/><br/><b style="color: #FF3D00;">4. Cleavage:</b> Mitotic cleavages produce 2 &rarr; 4 &rarr; 8 &rarr; 16 cell solid <b>Morula</b>.<br/><br/><b style="color: #FF3D00;">5. Blastocyst &amp; Implantation:</b> Cavitation produces Blastocyst (trophoblast + inner cell mass). On Day 7, trophoblast embeds into endometrium.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q86: Explain Placenta Formation, its structural connections, and multi-hormonal endocrine functions during gestation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF3D00;">1. Formation:</b> Chorionic villi from trophoblast interdigitate with uterine endometrium to form the placenta, connected to embryo by umbilical cord.<br/><br/><b style="color: #FF3D00;">2. Physiological Functions:</b> Facilitates transfer of oxygen and nutrients (glucose, amino acids) from maternal blood; removes fetal metabolic wastes (CO_2, urea).<br/><br/><b style="color: #FF3D00;">3. Endocrine Functions:</b> Secretes hCG (maintains corpus luteum), hPL (alters maternal metabolism for fetal growth), Estrogens, Progesterone (maintains pregnancy), and Relaxin (relaxes pelvic joints during labor).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q87: Describe Parturition and Lactation: Neuroendocrine reflexes, hormonal triggers, and physiological importance.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF3D00;">1. Parturition:</b> Foetal Ejection Reflex initiated by mature fetus and placenta triggers maternal posterior pituitary to secrete <b>Oxytocin</b>. Oxytocin stimulates powerful myometrial contractions; positive feedback amplifies contractions until birth.<br/><br/><b style="color: #FF3D00;">2. Lactation:</b> Mammary differentiation during pregnancy; <b>Prolactin</b> stimulates milk synthesis in alveoli.<br/><br/><b style="color: #FF3D00;">3. Milk Let-Down Reflex:</b> Suckling activates sensory receptors &rarr; oxytocin causes myoepithelial contraction &rarr; milk ejection.<br/><br/><b style="color: #FF3D00;">4. Colostrum:</b> First milk containing Secretory IgA, conferring vital passive immunity against infections.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q88: Discuss Sexually Transmitted Infections (STIs): Major bacterial, viral, and protozoan STDs, transmission, symptoms, and prevention.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF3D00;">1. Bacterial STIs:</b> Gonorrhoea (<i>Neisseria</i>), Syphilis (<i>Treponema</i>), Chlamydia.<br/><b style="color: #FF3D00;">2. Viral STIs:</b> Genital Herpes (HSV-2), Genital Warts (HPV), Hepatitis B, HIV/AIDS (incurable).<br/><b style="color: #FF3D00;">3. Protozoan STIs:</b> Trichomoniasis (<i>Trichomonas</i>).<br/><b style="color: #FF3D00;">4. Symptoms &amp; Complications:</b> Genital discharge, sores, burning urination; untreated STIs cause Pelvic Inflammatory Disease (PID), ectopic pregnancy, and infertility.<br/><b style="color: #FF3D00;">5. Prevention:</b> Safe sex practices, consistent condom use, avoiding multiple partners, prompt treatment of symptomatic partners.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q89: Explain Contraceptive Methods in detail: Natural, Barrier, IUDs, Oral Pills, and Surgical Sterilization.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF3D00;">1. Natural:</b> Periodic abstinence (days 10–17), Coitus interruptus, Lactational amenorrhea.<br/><b style="color: #FF3D00;">2. Barrier:</b> Condoms (prevent STDs/HIV), Diaphragms, Cervical caps with spermicidal creams.<br/><b style="color: #FF3D00;">3. IUDs:</b> Non-medicated (Lippes loop), Copper-releasing (CuT, Multiload 375 - suppress motility), Hormone-releasing (LNG-20 - prevent implantation).<br/><b style="color: #FF3D00;">4. Oral Pills:</b> Combination pills (inhibit ovulation) and <b>Saheli</b> (non-steroidal once-a-week pill from CDRI).<br/><b style="color: #FF3D00;">5. Surgical:</b> Vasectomy in males (cutting vas deferens) and Tubectomy in females (cutting fallopian tubes).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q90: Discuss Assisted Reproductive Technologies (ART): In-depth mechanisms of IVF, ZIFT, GIFT, ICSI, and IUI.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF3D00;">1. IVF-ET:</b> Ova and sperms fertilized in vitro; early embryo transferred into female tract.<br/><b style="color: #FF3D00;">2. ZIFT (Zygote Intra-Fallopian Transfer):</b> Zygote or early embryo (&le; 8 blastomeres) transferred into fallopian tube.<br/><b style="color: #FF3D00;">3. IUT (Intra-Uterine Transfer):</b> Embryo (&gt; 8 blastomeres) transferred directly into uterine cavity.<br/><b style="color: #FF3D00;">4. GIFT (Gamete Intra-Fallopian Transfer):</b> Donor ovum transferred into fallopian tube for in vivo fertilization.<br/><b style="color: #FF3D00;">5. ICSI:</b> Direct microinjection of single sperm into ovum cytoplasm for severe male infertility.<br/><b style="color: #FF3D00;">6. IUI:</b> Washed concentrated sperm introduced into uterus at ovulation.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q91: Explain Medical Termination of Pregnancy (MTP) and Amniocentesis: Medical protocols, laws, and ethical issues.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF3D00;">1. MTP:</b> Induced abortion; safest in first trimester (&le; 12 weeks). Legalized under MTP Act 1971; amended in 2021 permitting termination up to 24 weeks for vulnerable cases with medical board opinion.<br/><br/><b style="color: #FF3D00;">2. Amniocentesis:</b> Aspiration of amniotic fluid to analyze fetal karyotype for genetic defects (Down, Turner syndrome).<br/><br/><b style="color: #FF3D00;">3. Statutory Ban:</b> Misused for female foeticide, leading to declining child sex ratios; strictly banned under PCPNDT Act.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q92: Construct a comprehensive comparative matrix between Spermatogenesis and Oogenesis across all stages.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF3D00;">1. Initiation:</b> Spermatogenesis at puberty; Oogenesis in prenatal embryonic life.<br/><b style="color: #FF3D00;">2. Yield:</b> 1 primary spermatocyte yields 4 functional sperms; 1 primary oocyte yields 1 ovum and 2–3 degenerate polar bodies.<br/><b style="color: #FF3D00;">3. Arrest Points:</b> No arrest in spermatogenesis; Oogenesis arrested at Diplotene (Prophase I) and Metaphase II.<br/><b style="color: #FF3D00;">4. Cytokinesis:</b> Equal cytoplasmic divisions in spermatogenesis; highly unequal in oogenesis preserving yolk for embryo.<br/><b style="color: #FF3D00;">5. Duration:</b> Continuous throughout life in males; ceases at menopause in females.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q93: Describe the histological layers and cellular architecture of the Human Ovary from cortex to medulla.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF3D00;">1. Germinal Epithelium:</b> Outer simple cuboidal covering, continuous with peritoneal mesothelium.<br/><b style="color: #FF3D00;">2. Tunica Albuginea:</b> Dense fibrous connective tissue capsule beneath epithelium.<br/><b style="color: #FF3D00;">3. Ovarian Cortex:</b> Dense stroma containing ovarian follicles at various stages of maturity (primordial, primary, secondary, tertiary, Graafian follicle, corpus luteum, corpus albicans).<br/><b style="color: #FF3D00;">4. Ovarian Medulla:</b> Central vascular zone containing loose connective tissue, blood vessels, lymphatics, and nerve fibers.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q94: Explain the biochemical structure of Zona Pellucida and the mechanism of Acrosomal Penetration.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF3D00;">1. Zona Pellucida:</b> Thick, translucent extracellular glycoprotein matrix containing ZP1, ZP2, ZP3, and ZP4 glycoproteins.<br/><br/><b style="color: #FF3D00;">2. Sperm Binding:</b> Capacitated sperm binds species-specific <b>ZP3 receptor</b>, initiating the acrosomal reaction.<br/><br/><b style="color: #FF3D00;">3. Enzymatic Digestion:</b> Acrosome releases hyaluronidase and acrosin (protease), dissolving the zona pellucida path for sperm flagellar propulsion into perivitelline space.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q95: Detail the structure and endocrine role of the Human Mammary Gland during pregnancy and lactation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF3D00;">1. Structure:</b> 15–20 glandular lobes embedded in adipose tissue; each lobe contains clusters of secretory alveoli opening into tubules &rarr; ducts &rarr; ampulla &rarr; lactiferous duct terminating at nipple.<br/><br/><b style="color: #FF3D00;">2. Hormonal Control:</b> Estrogen and progesterone stimulate ductal and alveolar branching during pregnancy. Prolactin stimulates milk protein synthesis. Oxytocin induces milk ejection via myoepithelial cell contraction.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q96: Explain the hormonal feedback loop controlling the Luteal Phase and Menstruation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF3D00;">1. Luteal Maintenance:</b> LH stimulates corpus luteum to secrete high progesterone and estrogen.<br/><b style="color: #FF3D00;">2. Negative Feedback:</b> High progesterone suppresses hypothalamic GnRH and pituitary LH/FSH.<br/><b style="color: #FF3D00;">3. Regression:</b> Declining LH causes corpus luteum to degenerate into corpus albicans.<br/><b style="color: #FF3D00;">4. Menstruation:</b> Abrupt plunge in progesterone causes endometrial ischemia, spiral artery constriction, tissue sloughing, and menstrual bleeding.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q97: Discuss the causes, diagnosis, and treatment modalities for Female and Male Infertility.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF3D00;">1. Diagnostic Tests:</b> Semen analysis (count, motility), hysterosalpingography (tubal patency), laparoscopy, pelvic ultrasound, serum hormone assays (FSH, LH, Progesterone).<br/><br/><b style="color: #FF3D00;">2. Treatment Modalities:</b> Hormonal therapy (clomiphene citrate for ovulation induction), corrective surgery for blocked tubes or varicoceles, and Assisted Reproductive Technologies (IUI, IVF, ICSI).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q98: Explain the physiological role of hCG during the first trimester of human pregnancy.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF3D00;">1. Source:</b> Secreted by the syncytiotrophoblast of the implanted blastocyst.<br/><b style="color: #FF3D00;">2. Function:</b> Mimics LH to prevent degeneration of the corpus luteum, maintaining high progesterone secretion for first 10–12 weeks until placenta takes over steroidogenesis.<br/><b style="color: #FF3D00;">3. Diagnostic Value:</b> Excreted in maternal urine, enabling early home pregnancy detection.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q99: Describe the surgical procedures and reversibility of Vasectomy and Tubectomy.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF3D00;">1. Vasectomy:</b> Bilateral excision and ligation of a small section of vas deferens through scrotum; semen lacks sperm (azoospermia); highly effective (>99.9%); reversal is technically difficult and has poor success rate.<br/><br/><b style="color: #FF3D00;">2. Tubectomy:</b> Bilateral ligation and excision of a section of fallopian tubes through laparoscopy/laparotomy; prevents ovum transport; permanent sterilization with low reversal feasibility.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF3D00; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q100: Construct a Master Flowchart and Summary Matrix integrating Human Reproduction, Gametogenesis, and Reproductive Health Technologies.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF3D00;">1. Gametogenesis:</b> Spermatogonia (2n) &rarr; Spermatozoa (n) &amp; Oogonia (2n) &rarr; Ovum (n) &rarr; Hormonal regulation (GnRH, LH, FSH).<br/><b style="color: #FF3D00;">2. Embryogenesis:</b> Fertilization (Ampulla) &rarr; Zygote &rarr; Morula &rarr; Blastocyst &rarr; Implantation &rarr; Placenta (hCG, hPL) &rarr; Parturition (Oxytocin) &rarr; Lactation (Prolactin, IgA Colostrum).<br/><b style="color: #FF3D00;">3. Reproductive Health:</b> Contraception (Natural, Barriers, IUDs, Saheli, Sterilization) &rarr; STDs (Bacterial, Viral) &rarr; Diagnostics (MTP, Amniocentesis) &rarr; ART (IVF, ZIFT, GIFT, ICSI, IUI).
    </div>
  </div>

</div>
`;

export const c12Zoo1Mcqs = [
  {
    "id": "c12-zoo-1-mcq-1",
    "question": "The temperature of the scrotum is maintained below normal body temperature by approximately:",
    "options": [
      "A):   0.5\&deg;C",
      "B):   2 - 2.5\&deg;C",
      "C):   5\&deg;C",
      "D):   10\&deg;C"
    ],
    "correctAnswer": "b",
    "explanation": "The scrotum maintains an intratesticular temperature 2–2.5°C lower than core body temperature, which is essential for viable spermatogenesis."
  },
  {
    "id": "c12-zoo-1-mcq-2",
    "question": "Which cells in the human testis synthesize and secrete testosterone androgens under LH stimulation?",
    "options": [
      "A):   Sertoli cells",
      "B):   Leydig cells (Interstitial cells)",
      "C):   Spermatogonia",
      "D):   Primary spermatocytes"
    ],
    "correctAnswer": "b",
    "explanation": "Leydig cells located in interstitial spaces between seminiferous tubules produce testosterone when stimulated by LH (ICSH)."
  },
  {
    "id": "c12-zoo-1-mcq-3",
    "question": "The structural organ where human spermatozoa acquire physiological maturity and motility is the:",
    "options": [
      "A):   Rete testis",
      "B):   Epididymis",
      "C):   Seminal vesicle",
      "D):   Vas deferens"
    ],
    "correctAnswer": "b",
    "explanation": "Sperms undergo physiological maturation and acquire flagellar motility during their transit through the epididymis."
  },
  {
    "id": "c12-zoo-1-mcq-4",
    "question": "Fructose, which serves as the primary metabolic energy substrate for sperm motility, is secreted by:",
    "options": [
      "A):   Prostate gland",
      "B):   Bulbourethral glands",
      "C):   Seminal vesicles",
      "D):   Sertoli cells"
    ],
    "correctAnswer": "c",
    "explanation": "Seminal vesicles secrete alkaline fluid containing high concentrations of fructose to nourish swimming sperms."
  },
  {
    "id": "c12-zoo-1-mcq-5",
    "question": "In the human female reproductive tract, fertilization normally occurs in the:",
    "options": [
      "A):   Infundibulum",
      "B):   Ampulla of Fallopian tube",
      "C):   Uterine cavity",
      "D):   Cervix"
    ],
    "correctAnswer": "b",
    "explanation": "Fertilization takes place in the ampulla of the fallopian tube (oviduct)."
  },
  {
    "id": "c12-zoo-1-mcq-6",
    "question": "The fluid-filled cavity characteristic of tertiary and mature Graafian follicles is termed the:",
    "options": [
      "A):   Blastocoel",
      "B):   Antrum",
      "C):   Archenteron",
      "D):   Perivitelline space"
    ],
    "correctAnswer": "b",
    "explanation": "The antrum is the fluid-filled cavity filled with liquor folliculi in tertiary and Graafian follicles."
  },
  {
    "id": "c12-zoo-1-mcq-7",
    "question": "The transformation of non-motile haploid spermatids into motile spermatozoa is specifically termed:",
    "options": [
      "A):   Spermatocytogenesis",
      "B):   Spermiogenesis",
      "C):   Spermiation",
      "D):   Insemination"
    ],
    "correctAnswer": "b",
    "explanation": "Spermiogenesis is the morphological remodeling of round spermatids into specialized flagellated spermatozoa."
  },
  {
    "id": "c12-zoo-1-mcq-8",
    "question": "The hydrolytic enzyme-rich cap covering the anterior half of the sperm nucleus is the:",
    "options": [
      "A):   Nebenkern",
      "B):   Acrosome",
      "C):   Centriole",
      "D):   Corona radiata"
    ],
    "correctAnswer": "b",
    "explanation": "The acrosome is a Golgi-derived vesicle packed with hyaluronidase and proteases that digest egg coats during fertilization."
  },
  {
    "id": "c12-zoo-1-mcq-9",
    "question": "In human females, oogenesis is arrested at which specific stage of meiosis in a newborn infant?",
    "options": [
      "A):   Metaphase II",
      "B):   Diplotene of Prophase I",
      "C):   Anaphase I",
      "D):   Telophase II"
    ],
    "correctAnswer": "b",
    "explanation": "Primary oocytes enter Meiosis I during fetal embryonic life and remain arrested at Diplotene of Prophase I until puberty."
  },
  {
    "id": "c12-zoo-1-mcq-10",
    "question": "Ovulation on Day 14 of the human menstrual cycle is triggered primarily by a sharp surge in:",
    "options": [
      "A):   Progesterone",
      "B):   Luteinizing Hormone (LH)",
      "C):   Oxytocin",
      "D):   Prolactin"
    ],
    "correctAnswer": "b",
    "explanation": "The mid-cycle LH surge induces the rupture of the mature Graafian follicle and release of the secondary oocyte (Ovulation)."
  },
  {
    "id": "c12-zoo-1-mcq-11",
    "question": "The temporary endocrine structure formed from the ruptured Graafian follicle after ovulation is the:",
    "options": [
      "A):   Corpus albicans",
      "B):   Corpus luteum",
      "C):   Corpus callosum",
      "D):   Zona pellucida"
    ],
    "correctAnswer": "b",
    "explanation": "The ruptured follicle develops into the Corpus Luteum, which secretes abundant progesterone to sustain the endometrium."
  },
  {
    "id": "c12-zoo-1-mcq-12",
    "question": "The slow block to polyspermy during fertilization is mediated by the:",
    "options": [
      "A):   Capacitation reaction",
      "B):   Cortical Reaction",
      "C):   Acrosomal reaction",
      "D):   Foetal ejection reflex"
    ],
    "correctAnswer": "b",
    "explanation": "The cortical reaction releases enzymes that harden the zona pellucida and destroy sperm receptors, blocking polyspermy."
  },
  {
    "id": "c12-zoo-1-mcq-13",
    "question": "The solid sphere of 8 to 16 blastomeres produced by cleavage of the zygote is called the:",
    "options": [
      "A):   Blastocyst",
      "B):   Morula",
      "C):   Gastrula",
      "D):   Trophoblast"
    ],
    "correctAnswer": "b",
    "explanation": "The solid mulberry-like ball of 8–16 blastomeres is termed the Morula."
  },
  {
    "id": "c12-zoo-1-mcq-14",
    "question": "Which cell layer of the blastocyst directly attaches to the endometrial epithelium during Implantation?",
    "options": [
      "A):   Inner Cell Mass",
      "B):   Trophoblast",
      "C):   Corona radiata",
      "D):   Mesoderm"
    ],
    "correctAnswer": "b",
    "explanation": "The outer trophoblast layer adheres to and invades the endometrium, establishing implantation."
  },
  {
    "id": "c12-zoo-1-mcq-15",
    "question": "Which hormone detected in maternal urine serves as the basis for clinical pregnancy test kits?",
    "options": [
      "A):   Estrogen",
      "B):   human Chorionic Gonadotropin (hCG)",
      "C):   Prolactin",
      "D):   Oxytocin"
    ],
    "correctAnswer": "b",
    "explanation": "hCG produced by the syncytiotrophoblast of the implanted blastocyst is excreted in maternal urine, confirming pregnancy."
  },
  {
    "id": "c12-zoo-1-mcq-16",
    "question": "The Foetal Ejection Reflex during parturition induces the release of which powerful contracting hormone?",
    "options": [
      "A):   Progesterone",
      "B):   Oxytocin",
      "C):   FSH",
      "D):   Relaxin"
    ],
    "correctAnswer": "b",
    "explanation": "The foetal ejection reflex stimulates the maternal posterior pituitary to release Oxytocin, inducing vigorous labor contractions."
  },
  {
    "id": "c12-zoo-1-mcq-17",
    "question": "Colostrum is of vital immunological importance to a newborn because it contains high levels of:",
    "options": [
      "A):   IgG antibodies",
      "B):   Secretory IgA antibodies",
      "C):   IgE antibodies",
      "D):   Histamines"
    ],
    "correctAnswer": "b",
    "explanation": "Colostrum provides passive immunity via abundant Secretory IgA antibodies that protect the infant's mucosal surfaces."
  },
  {
    "id": "c12-zoo-1-mcq-18",
    "question": "Which of the following Sexually Transmitted Infections is caused by a protozoan parasite?",
    "options": [
      "A):   Syphilis",
      "B):   Gonorrhoea",
      "C):   Trichomoniasis",
      "D):   Genital warts"
    ],
    "correctAnswer": "c",
    "explanation": "Trichomoniasis is caused by the flagellated protozoan parasite <i>Trichomonas vaginalis</i>."
  },
  {
    "id": "c12-zoo-1-mcq-19",
    "question": "Which of the following is an example of a Copper-releasing Intrauterine Device (IUD)?",
    "options": [
      "A):   Lippes loop",
      "B):   CuT / Multiload 375",
      "C):   LNG-20",
      "D):   Progestasert"
    ],
    "correctAnswer": "b",
    "explanation": "CuT, Cu7, and Multiload 375 release copper ions that suppress sperm motility and fertilizing capacity."
  },
  {
    "id": "c12-zoo-1-mcq-20",
    "question": "The non-steroidal once-a-week oral contraceptive pill 'Saheli' was developed in India by:",
    "options": [
      "A):   AIIMS New Delhi",
      "B):   CDRI Lucknow",
      "C):   NII New Delhi",
      "D):   ICMR New Delhi"
    ],
    "correctAnswer": "b",
    "explanation": "Saheli (Centchroman) was formulated by scientists at the Central Drug Research Institute (CDRI) in Lucknow."
  },
  {
    "id": "c12-zoo-1-mcq-21",
    "question": "Surgical sterilization performed by cutting and tying the vasa deferentia in males is termed:",
    "options": [
      "A):   Tubectomy",
      "B):   Vasectomy",
      "C):   Castration",
      "D):   Hysterectomy"
    ],
    "correctAnswer": "b",
    "explanation": "Vasectomy is the permanent male sterilization procedure wherein both vasa deferentia are ligated."
  },
  {
    "id": "c12-zoo-1-mcq-22",
    "question": "Medical Termination of Pregnancy (MTP) is considered safest when performed during the:",
    "options": [
      "A):   First Trimester (up to 12 weeks)",
      "B):   Second Trimester (13–24 weeks)",
      "C):   Third Trimester (25–36 weeks)",
      "D):   Any time before labor"
    ],
    "correctAnswer": "a",
    "explanation": "MTP carries the lowest risk of maternal complications during the first trimester (up to 12 weeks) of pregnancy."
  },
  {
    "id": "c12-zoo-1-mcq-23",
    "question": "Amniocentesis is a prenatal diagnostic procedure that samples fluid to detect:",
    "options": [
      "A):   Fetal eye color",
      "B):   Chromosomal abnormalities (e.g., Down syndrome)",
      "C):   Maternal blood pressure",
      "D):   Fetal heart rate"
    ],
    "correctAnswer": "b",
    "explanation": "Amniocentesis analyzes fetal chromosomes in amniotic fluid to diagnose genetic disorders like Down syndrome."
  },
  {
    "id": "c12-zoo-1-mcq-24",
    "question": "In Assisted Reproductive Technology, ZIFT involves transferring an embryo of up to 8 blastomeres into the:",
    "options": [
      "A):   Uterine cavity",
      "B):   Fallopian tube",
      "C):   Cervix",
      "D):   Vagina"
    ],
    "correctAnswer": "b",
    "explanation": "ZIFT (Zygote Intra-Fallopian Transfer) transfers a zygote or early embryo (≤ 8 blastomeres) into the fallopian tube."
  },
  {
    "id": "c12-zoo-1-mcq-25",
    "question": "The ART technique where a single sperm is directly microinjected into the ovum cytoplasm in vitro is:",
    "options": [
      "A):   GIFT",
      "B):   IUI",
      "C):   ICSI",
      "D):   ZIFT"
    ],
    "correctAnswer": "c",
    "explanation": "Intra-Cytoplasmic Sperm Injection (ICSI) involves direct laboratory microinjection of a sperm into an ovum."
  }
];
