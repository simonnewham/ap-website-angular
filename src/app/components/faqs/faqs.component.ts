import { Component, OnInit } from '@angular/core';
import { Faq } from 'src/app/models/faq'

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html'
})
export class FaqsComponent implements OnInit {

  constructor() { }

  questions: Faq[] = [
    {
      Question: 'Should I cancel my appointment because my period has started?',
      Answer: 'No, Gynaecological examination, ultrasound and Pap Smear can all be done during a period. If you have a bleeding problem you do not need to wait for a gap in the bleeding episode to make an appointment.'
    },
    {
      Question: 'Does Dr Newham do Obstetrics/deliver babies?',
      Answer: `No, Obstetrics is defined as care of a pregnancy beyond 20 weeks gestation. I stopped this part of my practice in 2017 after having done it for the previous 25 years.

      This  means that for pregnant patients you would be transferred to one of my colleges at 20 weeks to continue your antenatal care and deliver your baby. I would provide the care of the first trimester. This includes managing early pregnancy and it’s complications as well as screening for fetal abnormalities and risks for the pregnancy.`
    },
    {
      Question: 'What does a Consultation include and what does it cost?',
      Answer: `A consultation typically takes about 45 minutes. In this time I gather a general medical history and specific gynaecological history focusing on your concerns. An ultrasound scan is always done to compliment the physical examination. A Pap smear and urine analysis are done as appropriate.
         This costs R1400.00. The laboratory that processes your Pap smear will send an additional bill (about R350.00).`
    },
    {
      Question: 'What is a follow up visit and what does that cost?',
      Answer: `Sometimes you may need to return to assess the progress of a condition, the results of treatment or additional investigation. This is typically a 20 to 30 minute visit and will cost R700.00`
    },
    {
      Question: 'What other costs should I be aware of?',
      Answer: `Special investigations with Pathologists/Radiologists are common. Here is a list of some you may one day need.
       These are approximations of coarse but we can give you an exact quote on the day, before requesting the investigation.

        Pap Smear: R303.20
        13 week Fetal scan: R2600.00 (outsourced to Fetal assessment centre)
        20 week Fetal scan: R2800.00 (outsourced to Fetal assessment centre)
        Insertion of Intra-uterine Contraceptive Device: R1000.00
        Endometrial biopsy: R1000.00

        Hormone levels via Pathcare:
        - Thyroid R404.30
        - Estrogen R255.50
        - Insulin Resistance R330.20
        - Testosterone R511.00`
    },
    {
      Question: 'How often should I come for a routine check up?',
      Answer: `The usual advice is to have an annual check up and Pap smear. This does depend on age and individual risks.`
    }
  ];

  ngOnInit(): void {
  }
}
