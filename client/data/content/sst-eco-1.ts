import { ChapterContent } from "../types";

export const sstEco1: ChapterContent = {
  "id": "sst-eco-1",
  "number": 1,
  "title": "Development",
  "isHtmlView": true,
  "htmlOverview": "<style>\n  .q-card { background: rgba(15, 23, 42, 0.75); border: 1.5px solid rgba(253, 200, 48, 0.35); border-radius: 12px; padding: 16px; margin-bottom: 24px; box-shadow: 0 4px 15px rgba(0,0,0,0.25); }\n  .q-title { font-size: 17.5px; font-weight: 700; color: #FDC830; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }\n  .q-text { font-size: 15.5px; color: #FFFFFF; line-height: 1.9; margin-bottom: 12px; font-weight: 500; }\n  .sub-q { font-size: 15px; font-weight: 600; margin: 12px 0 4px; line-height: 1.8; }\n  .sol-box { background: rgba(0, 0, 0, 0.32); border-left: 3.5px solid #FDC830; border-radius: 8px; padding: 14px 16px; margin-top: 12px; }\n  .sol-title { font-size: 14.5px; font-weight: 700; color: #FFF3C4; margin-bottom: 8px; }\n  .sol-step { font-size: 15px; color: #E2E8F0; line-height: 1.9; }\n  .sol-step div { margin-top: 5px; margin-bottom: 5px; }\n  .lbl { color: #FFF3C4; font-weight: 700; }\n  .hl { color: #FDC830; font-weight: 700; }\n  .rev { text-align: justify; }\n  .pt { text-align: left !important; padding-left: 16px; text-indent: -16px; }\n  .pt::before { content: \"•\"; color: #FDC830; font-weight: 700; display: inline-block; width: 16px; text-indent: 0; }\n  .sec { color: #FDC830; font-weight: 700; font-size: 15.5px; margin-top: 14px !important; text-align: left !important; }\n  .exam { background: rgba(253, 200, 48, 0.10); border: 1.5px dashed #FDC830; border-radius: 8px; padding: 10px 12px; margin: 12px 0 4px; color: #FFFFFF; text-align: left; line-height: 1.8; }\n  .exam-t { color: #FDC830; font-weight: 700; font-size: 14.5px; display: block; margin-bottom: 2px; }\n  .diagram-card { background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(253, 200, 48, 0.4); border-radius: 10px; padding: 10px; margin: 14px 0; text-align: center; }\n  .diagram-wrapper { display: block; background: #1E1E2E; border-radius: 8px; padding: 4px; margin: 0 auto; width: 100%; box-sizing: border-box; overflow: hidden; }\n  .diagram-wrapper svg { display: block; width: 100%; height: auto; max-width: 100%; margin: 0 auto; }\n  .diagram-caption { color: #CBD5E1; font-size: 13.5px; text-align: center; margin-top: 8px; font-weight: 500; }\n  .badge { display: inline-block; background: rgba(253, 200, 48, 0.18); border: 1px solid #FDC830; color: #FFF3C4; border-radius: 6px; padding: 0 8px; font-size: 12.5px; font-weight: 700; }\n  .tbl-wrap { width: 100%; overflow-x: auto; margin: 8px 0; }\n  .dt { width: 100%; border-collapse: collapse; font-size: 13px; }\n  .dt th, .dt td { border: 1px solid rgba(255, 255, 255, 0.2); padding: 6px 5px; color: #FFFFFF; line-height: 1.45; text-align: left; vertical-align: top; }\n  .dt th { background: rgba(253, 200, 48, 0.2); color: #FFF3C4; }\n  .q-card .q-text, .q-card .sub-q { color: #FDC830 !important; text-align: justify !important; }\n  .q-card .sol-step > div.rev { text-align: justify !important; }\n  .q-card .sol-step > div.pt, .q-card .sol-step > div.sec { text-align: left !important; }\n  .q-card .sol-step > div.eq { color: #FFFFFF; font-weight: 600; text-align: left !important; }\n</style>\n<div style=\"padding: 4px 2px;\">\n  <div class=\"q-card\">\n    <div class=\"q-title\">✦ 1. What Development Promises — Different People, Different Goals</div><div class=\"sol-step\"><div class=\"rev\">Different persons have different notions of development. People seek things that are most important for them — what fulfils their aspirations or desires.</div><div class=\"tbl-wrap\"><table class=\"dt\"><tr><th>Category of person</th><th>Developmental goals / aspirations</th></tr><tr><td>Landless rural labourers</td><td>More days of work and better wages; local school for children; no social discrimination</td></tr><tr><td>Prosperous farmers from Punjab</td><td>Assured high family income through higher support prices for crops and hardworking, cheap labourers</td></tr><tr><td>Farmers who depend only on rain</td><td>Assured irrigation and good harvests</td></tr><tr><td>A rural woman from a land-owning family</td><td>Freedom and equal treatment, respect within the family</td></tr><tr><td>Urban unemployed youth</td><td>Regular job with a good salary</td></tr><tr><td>A boy from a rich urban family</td><td>Higher studies abroad, a good career</td></tr><tr><td>A girl from a rich urban family</td><td>As much freedom as her brother to decide what she wants to do</td></tr><tr><td>An adivasi from the Narmada valley</td><td>Protection of land, forest and livelihood; no displacement</td></tr></table></div><div class=\"diagram-card\"><div class=\"diagram-wrapper\"><svg viewBox=\"0 0 320 200\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\"><rect width=\"320\" height=\"200\" fill=\"#1E1E2E\" rx=\"8\"/><text x=\"160\" y=\"19\" font-size=\"11.5\" fill=\"#FDC830\" text-anchor=\"middle\" font-weight=\"700\">Income and Other Goals</text><rect x=\"13\" y=\"30\" width=\"142\" height=\"61\" rx=\"6\" fill=\"rgba(255,183,77,0.16)\" stroke=\"#FFB74D\" stroke-width=\"1.2\"/><text x=\"84\" y=\"46.0\" font-size=\"9.5\" fill=\"#FFFFFF\" text-anchor=\"middle\" font-weight=\"700\">Material goals</text><text x=\"84\" y=\"57.7\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">More income, regular</text><text x=\"84\" y=\"69.4\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">work, better wages,</text><text x=\"84\" y=\"81.1\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">decent prices for crops</text><rect x=\"165\" y=\"30\" width=\"142\" height=\"61\" rx=\"6\" fill=\"rgba(79,195,247,0.16)\" stroke=\"#4FC3F7\" stroke-width=\"1.2\"/><text x=\"236\" y=\"46.0\" font-size=\"9.5\" fill=\"#FFFFFF\" text-anchor=\"middle\" font-weight=\"700\">Non-material goals</text><text x=\"236\" y=\"57.7\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">Equal treatment, freedom,</text><text x=\"236\" y=\"69.4\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">security, respect from</text><text x=\"236\" y=\"81.1\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">others</text><rect x=\"13\" y=\"99\" width=\"142\" height=\"73\" rx=\"6\" fill=\"rgba(239,83,80,0.16)\" stroke=\"#EF5350\" stroke-width=\"1.2\"/><text x=\"84\" y=\"115.0\" font-size=\"9.5\" fill=\"#FFFFFF\" text-anchor=\"middle\" font-weight=\"700\">Conflicting goals</text><text x=\"84\" y=\"126.7\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">One person's development</text><text x=\"84\" y=\"138.4\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">can harm another, e.g. a</text><text x=\"84\" y=\"150.1\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">dam: electricity vs</text><text x=\"84\" y=\"161.8\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">displacement</text><rect x=\"165\" y=\"99\" width=\"142\" height=\"73\" rx=\"6\" fill=\"rgba(102,187,106,0.18)\" stroke=\"#66BB6A\" stroke-width=\"1.2\"/><text x=\"236\" y=\"115.0\" font-size=\"9.5\" fill=\"#FFFFFF\" text-anchor=\"middle\" font-weight=\"700\">Mixed goals</text><text x=\"236\" y=\"126.7\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">Women working outside</text><text x=\"236\" y=\"138.4\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">gain income and also</text><text x=\"236\" y=\"150.1\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">dignity in the household</text><text x=\"160\" y=\"186\" font-size=\"9.5\" fill=\"#FDC830\" text-anchor=\"middle\" font-weight=\"700\">Different people, different developmental goals</text></svg></div><div class=\"diagram-caption\">Development means different things to different people</div></div></div>\n  </div>\n\n  <div class=\"q-card\">\n    <div class=\"q-title\">✦ 2. National Development and How to Compare It</div><div class=\"sol-step\"><div class=\"rev\">National development means thinking about whether there is a <b>fair and just</b> path for all, and whether there is a better way of doing things. Countries are usually compared on the basis of their <span class=\"hl\">income</span>.</div><div class=\"pt\">Total income is not a useful measure, because populations differ.</div><div class=\"pt\">So we use <b>average income</b>, also called <b>per capita income</b> = total income of the country ÷ its total population.</div><div class=\"pt\">The <b>World Bank</b>, in its World Development Report, classifies countries by per capita income into high-income (rich), middle-income and low-income countries. The thresholds are revised regularly; India falls in the <b>lower-middle income</b> group.</div><div class=\"sec\">Limitation of averages</div><div class=\"pt\">Averages are useful for comparison, but they <b>hide disparities</b>.</div><div class=\"diagram-card\"><div class=\"diagram-wrapper\"><svg viewBox=\"0 0 320 262\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\"><rect width=\"320\" height=\"262\" fill=\"#1E1E2E\" rx=\"8\"/><text x=\"160\" y=\"19\" font-size=\"11.5\" fill=\"#FDC830\" text-anchor=\"middle\" font-weight=\"700\">Same Average, Very Different Lives</text><rect x=\"18\" y=\"168.3\" width=\"22\" height=\"27.7\" fill=\"#4FC3F7\" rx=\"2\"/><text x=\"29\" y=\"208\" font-size=\"8.5\" fill=\"#CBD5E1\" text-anchor=\"middle\">1</text><rect x=\"46\" y=\"165.4\" width=\"22\" height=\"30.6\" fill=\"#4FC3F7\" rx=\"2\"/><text x=\"57\" y=\"208\" font-size=\"8.5\" fill=\"#CBD5E1\" text-anchor=\"middle\">2</text><rect x=\"74\" y=\"167.4\" width=\"22\" height=\"28.6\" fill=\"#4FC3F7\" rx=\"2\"/><text x=\"85\" y=\"208\" font-size=\"8.5\" fill=\"#CBD5E1\" text-anchor=\"middle\">3</text><rect x=\"102\" y=\"166.8\" width=\"22\" height=\"29.2\" fill=\"#4FC3F7\" rx=\"2\"/><text x=\"113\" y=\"208\" font-size=\"8.5\" fill=\"#CBD5E1\" text-anchor=\"middle\">4</text><rect x=\"130\" y=\"166.3\" width=\"22\" height=\"29.8\" fill=\"#4FC3F7\" rx=\"2\"/><text x=\"141\" y=\"208\" font-size=\"8.5\" fill=\"#CBD5E1\" text-anchor=\"middle\">5</text><text x=\"85\" y=\"222\" font-size=\"10\" fill=\"#FFFFFF\" text-anchor=\"middle\" font-weight=\"700\">Country A</text><line x1=\"15\" y1=\"166.8\" x2=\"155\" y2=\"166.8\" stroke=\"#FFFFFF\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/><rect x=\"172\" y=\"194.5\" width=\"22\" height=\"1.5\" fill=\"#FFB74D\" rx=\"2\"/><text x=\"183\" y=\"208\" font-size=\"8.5\" fill=\"#CBD5E1\" text-anchor=\"middle\">1</text><rect x=\"200\" y=\"194.5\" width=\"22\" height=\"1.5\" fill=\"#FFB74D\" rx=\"2\"/><text x=\"211\" y=\"208\" font-size=\"8.5\" fill=\"#CBD5E1\" text-anchor=\"middle\">2</text><rect x=\"228\" y=\"194.5\" width=\"22\" height=\"1.5\" fill=\"#FFB74D\" rx=\"2\"/><text x=\"239\" y=\"208\" font-size=\"8.5\" fill=\"#CBD5E1\" text-anchor=\"middle\">3</text><rect x=\"256\" y=\"194.5\" width=\"22\" height=\"1.5\" fill=\"#FFB74D\" rx=\"2\"/><text x=\"267\" y=\"208\" font-size=\"8.5\" fill=\"#CBD5E1\" text-anchor=\"middle\">4</text><rect x=\"284\" y=\"56.0\" width=\"22\" height=\"140.0\" fill=\"#FFB74D\" rx=\"2\"/><text x=\"295\" y=\"208\" font-size=\"8.5\" fill=\"#CBD5E1\" text-anchor=\"middle\">5</text><text x=\"239\" y=\"222\" font-size=\"10\" fill=\"#FFFFFF\" text-anchor=\"middle\" font-weight=\"700\">Country B</text><line x1=\"169\" y1=\"166.8\" x2=\"309\" y2=\"166.8\" stroke=\"#FFFFFF\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/><text x=\"295\" y=\"52.0\" font-size=\"9\" fill=\"#FFB74D\" text-anchor=\"middle\" font-weight=\"700\">48,000</text><text x=\"160\" y=\"240\" font-size=\"9\" fill=\"#CBD5E1\" text-anchor=\"middle\">Dashed line: average income Rs 10,000 in both</text><text x=\"160\" y=\"253\" font-size=\"9\" fill=\"#CBD5E1\" text-anchor=\"middle\">Five citizens each; bar heights to scale</text></svg></div><div class=\"diagram-caption\">Country A is more equal; in Country B one person is very rich and four are very poor</div></div><div class=\"exam\"><span class=\"exam-t\">📌 Remember</span><div>• Per capita income = Total national income ÷ Total population.</div><div>• An average tells us nothing about how income is distributed among people.</div></div></div>\n  </div>\n\n  <div class=\"q-card\">\n    <div class=\"q-title\">✦ 3. Income and Other Criteria</div><div class=\"sol-step\"><div class=\"rev\">Income alone is not an adequate indicator of the material goods and services citizens are able to use. Comparing states shows this: <b>Haryana</b> has a higher per capita income than <b>Kerala</b>, but Kerala has a much lower <b>infant mortality rate</b> and higher <b>literacy</b> and school attendance; <b>Bihar</b> lags on most indicators.</div><div class=\"pt\"><b>Infant Mortality Rate (IMR):</b> number of children who die before the age of one year as a proportion of 1000 live children born in that particular year.</div><div class=\"pt\"><b>Literacy rate:</b> proportion of literate population in the 7 and above age group.</div><div class=\"pt\"><b>Net Attendance Ratio:</b> total number of children of age group 14 and 15 years attending school as a percentage of total number of children in the same age group.</div><div class=\"sec\">Public facilities</div><div class=\"pt\">Money in your pocket cannot buy everything: a pollution-free environment, unadulterated medicines or protection from infectious diseases need the whole community to act.</div><div class=\"pt\">It is cheaper to provide many things collectively — security, schools, health centres.</div><div class=\"pt\">Kerala has a low IMR because it has adequate provision of basic health and educational facilities; its <b>Public Distribution System</b> (ration shops) also functions well.</div><div class=\"sec\">Human Development Report</div><div class=\"diagram-card\"><div class=\"diagram-wrapper\"><svg viewBox=\"0 0 320 142\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\"><rect width=\"320\" height=\"142\" fill=\"#1E1E2E\" rx=\"8\"/><text x=\"160\" y=\"19\" font-size=\"11.5\" fill=\"#FDC830\" text-anchor=\"middle\" font-weight=\"700\">World Bank vs UNDP</text><rect x=\"13\" y=\"30\" width=\"142\" height=\"84\" rx=\"6\" fill=\"rgba(255,183,77,0.16)\" stroke=\"#FFB74D\" stroke-width=\"1.2\"/><text x=\"84\" y=\"46.0\" font-size=\"9.5\" fill=\"#FFFFFF\" text-anchor=\"middle\" font-weight=\"700\">World Bank</text><text x=\"84\" y=\"57.7\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">Average (per capita)</text><text x=\"84\" y=\"69.4\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">income; countries grouped</text><text x=\"84\" y=\"81.1\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">as high, middle and low</text><text x=\"84\" y=\"92.8\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">income; India is</text><text x=\"84\" y=\"104.5\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">lower-middle income</text><rect x=\"165\" y=\"30\" width=\"142\" height=\"84\" rx=\"6\" fill=\"rgba(102,187,106,0.18)\" stroke=\"#66BB6A\" stroke-width=\"1.2\"/><text x=\"236\" y=\"46.0\" font-size=\"9.5\" fill=\"#FFFFFF\" text-anchor=\"middle\" font-weight=\"700\">UNDP (HDI)</text><text x=\"236\" y=\"57.7\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">Health, education and</text><text x=\"236\" y=\"69.4\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">income together; Human</text><text x=\"236\" y=\"81.1\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">Development Report ranks</text><text x=\"236\" y=\"92.8\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">countries</text><text x=\"160\" y=\"128\" font-size=\"9.5\" fill=\"#FDC830\" text-anchor=\"middle\" font-weight=\"700\">Per capita income = Total income ÷ Total population</text></svg></div><div class=\"diagram-caption\">Two ways of measuring development</div></div><div class=\"diagram-card\"><div class=\"diagram-wrapper\"><svg viewBox=\"0 0 320 266\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\"><rect width=\"320\" height=\"266\" fill=\"#1E1E2E\" rx=\"8\"/><text x=\"160\" y=\"19\" font-size=\"11.5\" fill=\"#FDC830\" text-anchor=\"middle\" font-weight=\"700\">Human Development Index</text><rect x=\"60\" y=\"30\" width=\"200\" height=\"51\" rx=\"6\" fill=\"rgba(102,187,106,0.18)\" stroke=\"#66BB6A\" stroke-width=\"1.2\"/><text x=\"160\" y=\"46.5\" font-size=\"10\" fill=\"#FFFFFF\" text-anchor=\"middle\" font-weight=\"700\">HDI</text><text x=\"160\" y=\"58.9\" font-size=\"9.5\" fill=\"#FFFFFF\" text-anchor=\"middle\">Combines health, education and</text><text x=\"160\" y=\"71.2\" font-size=\"9.5\" fill=\"#FFFFFF\" text-anchor=\"middle\">standard of living</text><line x1=\"160\" y1=\"82\" x2=\"160\" y2=\"89\" stroke=\"#B0BEC5\" stroke-width=\"1.4\"/><path d=\"M160 94 L163.5 88 L156.5 88 Z\" fill=\"#B0BEC5\"/><rect x=\"13\" y=\"96\" width=\"142\" height=\"73\" rx=\"6\" fill=\"rgba(253, 200, 48,0.16)\" stroke=\"#FDC830\" stroke-width=\"1.2\"/><text x=\"84\" y=\"112.0\" font-size=\"9.5\" fill=\"#FFFFFF\" text-anchor=\"middle\" font-weight=\"700\">Life expectancy at</text><text x=\"84\" y=\"123.7\" font-size=\"9.5\" fill=\"#FFFFFF\" text-anchor=\"middle\" font-weight=\"700\">birth</text><text x=\"84\" y=\"135.4\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">Average expected length</text><text x=\"84\" y=\"147.1\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">of life at birth</text><rect x=\"165\" y=\"96\" width=\"142\" height=\"73\" rx=\"6\" fill=\"rgba(79,195,247,0.16)\" stroke=\"#4FC3F7\" stroke-width=\"1.2\"/><text x=\"236\" y=\"112.0\" font-size=\"9.5\" fill=\"#FFFFFF\" text-anchor=\"middle\" font-weight=\"700\">Mean years of</text><text x=\"236\" y=\"123.7\" font-size=\"9.5\" fill=\"#FFFFFF\" text-anchor=\"middle\" font-weight=\"700\">schooling</text><text x=\"236\" y=\"135.4\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">Average years of</text><text x=\"236\" y=\"147.1\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">education of people aged</text><text x=\"236\" y=\"158.8\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">25 and above</text><rect x=\"13\" y=\"177\" width=\"142\" height=\"73\" rx=\"6\" fill=\"rgba(79,195,247,0.16)\" stroke=\"#4FC3F7\" stroke-width=\"1.2\"/><text x=\"84\" y=\"193.0\" font-size=\"9.5\" fill=\"#FFFFFF\" text-anchor=\"middle\" font-weight=\"700\">Expected years of</text><text x=\"84\" y=\"204.7\" font-size=\"9.5\" fill=\"#FFFFFF\" text-anchor=\"middle\" font-weight=\"700\">schooling</text><text x=\"84\" y=\"216.4\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">Years of schooling a</text><text x=\"84\" y=\"228.1\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">child aged 5 is expected</text><text x=\"84\" y=\"239.8\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">to receive</text><rect x=\"165\" y=\"177\" width=\"142\" height=\"73\" rx=\"6\" fill=\"rgba(255,183,77,0.16)\" stroke=\"#FFB74D\" stroke-width=\"1.2\"/><text x=\"236\" y=\"193.0\" font-size=\"9.5\" fill=\"#FFFFFF\" text-anchor=\"middle\" font-weight=\"700\">Per capita income</text><text x=\"236\" y=\"204.7\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">Gross National Income per</text><text x=\"236\" y=\"216.4\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">head (in PPP US dollars)</text></svg></div><div class=\"diagram-caption\">The UNDP compares countries on these indicators</div></div><div class=\"pt\">Among India's neighbours, <b>Sri Lanka</b> is much ahead of India on every human development indicator, and has a better HDI rank.</div></div>\n  </div>\n\n  <div class=\"q-card\">\n    <div class=\"q-title\">✦ 4. Sustainability of Development</div><div class=\"sol-step\"><div class=\"rev\">Scientists warn that the present type and levels of development are not sustainable. <span class=\"hl\">Sustainable development</span> means development that meets present needs without damaging the resources and environment for future generations.</div><div class=\"diagram-card\"><div class=\"diagram-wrapper\"><svg viewBox=\"0 0 320 200\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\"><rect width=\"320\" height=\"200\" fill=\"#1E1E2E\" rx=\"8\"/><text x=\"160\" y=\"19\" font-size=\"11.5\" fill=\"#FDC830\" text-anchor=\"middle\" font-weight=\"700\">Sustainability of Development</text><rect x=\"13\" y=\"30\" width=\"142\" height=\"73\" rx=\"6\" fill=\"rgba(102,187,106,0.18)\" stroke=\"#66BB6A\" stroke-width=\"1.2\"/><text x=\"84\" y=\"46.0\" font-size=\"9.5\" fill=\"#FFFFFF\" text-anchor=\"middle\" font-weight=\"700\">Renewable resources</text><text x=\"84\" y=\"57.7\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">Replenished by nature,</text><text x=\"84\" y=\"69.4\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">e.g. groundwater — but</text><text x=\"84\" y=\"81.1\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">can be overused</text><rect x=\"165\" y=\"30\" width=\"142\" height=\"73\" rx=\"6\" fill=\"rgba(239,83,80,0.16)\" stroke=\"#EF5350\" stroke-width=\"1.2\"/><text x=\"236\" y=\"46.0\" font-size=\"9.5\" fill=\"#FFFFFF\" text-anchor=\"middle\" font-weight=\"700\">Non-renewable</text><text x=\"236\" y=\"57.7\" font-size=\"9.5\" fill=\"#FFFFFF\" text-anchor=\"middle\" font-weight=\"700\">resources</text><text x=\"236\" y=\"69.4\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">Exhausted after years of</text><text x=\"236\" y=\"81.1\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">use, e.g. crude oil; new</text><text x=\"236\" y=\"92.8\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">stock may not be found</text><rect x=\"13\" y=\"111\" width=\"142\" height=\"61\" rx=\"6\" fill=\"rgba(255,183,77,0.16)\" stroke=\"#FFB74D\" stroke-width=\"1.2\"/><text x=\"84\" y=\"127.0\" font-size=\"9.5\" fill=\"#FFFFFF\" text-anchor=\"middle\" font-weight=\"700\">Groundwater warning</text><text x=\"84\" y=\"138.7\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">Nearly one-third of the</text><text x=\"84\" y=\"150.4\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">country is overusing its</text><text x=\"84\" y=\"162.1\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">groundwater</text><rect x=\"165\" y=\"111\" width=\"142\" height=\"61\" rx=\"6\" fill=\"rgba(79,195,247,0.16)\" stroke=\"#4FC3F7\" stroke-width=\"1.2\"/><text x=\"236\" y=\"127.0\" font-size=\"9.5\" fill=\"#FFFFFF\" text-anchor=\"middle\" font-weight=\"700\">No boundaries</text><text x=\"236\" y=\"138.7\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">Environmental degradation</text><text x=\"236\" y=\"150.4\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">affects neighbouring</text><text x=\"236\" y=\"162.1\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\">regions and the world</text><text x=\"160\" y=\"186\" font-size=\"9.5\" fill=\"#FDC830\" text-anchor=\"middle\" font-weight=\"700\">Meet present needs without harming the future</text></svg></div><div class=\"diagram-caption\">Why sustainability matters</div></div><div class=\"pt\">Groundwater is a renewable resource, but it is being used faster than it is replenished by rain; about 300 districts have reported a fall in water level of over 4 metres in 20 years.</div><div class=\"pt\">Crude oil is non-renewable; if a country does not find new reserves or a cheaper substitute, development may stop.</div><div class=\"pt\">Gandhiji: “The Earth has enough resources to meet the needs of all but not enough to satisfy the greed of even one person.”</div></div>\n  </div>\n\n  <div class=\"q-card\">\n    <div class=\"q-title\">✦ Quick Glossary</div><div class=\"sol-step\"><div class=\"tbl-wrap\"><table class=\"dt\"><tr><th>Term</th><th>Meaning</th></tr><tr><td>Development</td><td>Process of improving people's lives — income and other goals like freedom, equality, health</td></tr><tr><td>Per capita income</td><td>Total income of a country divided by its total population</td></tr><tr><td>Infant mortality rate</td><td>Children dying before age 1 per 1000 live births in a year</td></tr><tr><td>Literacy rate</td><td>Proportion of literate population aged 7 and above</td></tr><tr><td>Net attendance ratio</td><td>Children aged 14–15 attending school as a % of all children of that age</td></tr><tr><td>Human Development Index</td><td>UNDP's measure combining health, education and income</td></tr><tr><td>Public Distribution System</td><td>Government ration shops supplying food grains at low prices</td></tr><tr><td>Sustainable development</td><td>Development that does not harm future generations</td></tr></table></div></div>\n  </div>\n\n</div>",
  "htmlExercises": {
    "se1-ex-1": "<style>\n  .q-card { background: rgba(15, 23, 42, 0.75); border: 1.5px solid rgba(253, 200, 48, 0.35); border-radius: 12px; padding: 16px; margin-bottom: 24px; box-shadow: 0 4px 15px rgba(0,0,0,0.25); }\n  .q-title { font-size: 17.5px; font-weight: 700; color: #FDC830; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }\n  .q-text { font-size: 15.5px; color: #FFFFFF; line-height: 1.9; margin-bottom: 12px; font-weight: 500; }\n  .sub-q { font-size: 15px; font-weight: 600; margin: 12px 0 4px; line-height: 1.8; }\n  .sol-box { background: rgba(0, 0, 0, 0.32); border-left: 3.5px solid #FDC830; border-radius: 8px; padding: 14px 16px; margin-top: 12px; }\n  .sol-title { font-size: 14.5px; font-weight: 700; color: #FFF3C4; margin-bottom: 8px; }\n  .sol-step { font-size: 15px; color: #E2E8F0; line-height: 1.9; }\n  .sol-step div { margin-top: 5px; margin-bottom: 5px; }\n  .lbl { color: #FFF3C4; font-weight: 700; }\n  .hl { color: #FDC830; font-weight: 700; }\n  .rev { text-align: justify; }\n  .pt { text-align: left !important; padding-left: 16px; text-indent: -16px; }\n  .pt::before { content: \"•\"; color: #FDC830; font-weight: 700; display: inline-block; width: 16px; text-indent: 0; }\n  .sec { color: #FDC830; font-weight: 700; font-size: 15.5px; margin-top: 14px !important; text-align: left !important; }\n  .exam { background: rgba(253, 200, 48, 0.10); border: 1.5px dashed #FDC830; border-radius: 8px; padding: 10px 12px; margin: 12px 0 4px; color: #FFFFFF; text-align: left; line-height: 1.8; }\n  .exam-t { color: #FDC830; font-weight: 700; font-size: 14.5px; display: block; margin-bottom: 2px; }\n  .diagram-card { background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(253, 200, 48, 0.4); border-radius: 10px; padding: 10px; margin: 14px 0; text-align: center; }\n  .diagram-wrapper { display: block; background: #1E1E2E; border-radius: 8px; padding: 4px; margin: 0 auto; width: 100%; box-sizing: border-box; overflow: hidden; }\n  .diagram-wrapper svg { display: block; width: 100%; height: auto; max-width: 100%; margin: 0 auto; }\n  .diagram-caption { color: #CBD5E1; font-size: 13.5px; text-align: center; margin-top: 8px; font-weight: 500; }\n  .badge { display: inline-block; background: rgba(253, 200, 48, 0.18); border: 1px solid #FDC830; color: #FFF3C4; border-radius: 6px; padding: 0 8px; font-size: 12.5px; font-weight: 700; }\n  .tbl-wrap { width: 100%; overflow-x: auto; margin: 8px 0; }\n  .dt { width: 100%; border-collapse: collapse; font-size: 13px; }\n  .dt th, .dt td { border: 1px solid rgba(255, 255, 255, 0.2); padding: 6px 5px; color: #FFFFFF; line-height: 1.45; text-align: left; vertical-align: top; }\n  .dt th { background: rgba(253, 200, 48, 0.2); color: #FFF3C4; }\n  .q-card .q-text, .q-card .sub-q { color: #FDC830 !important; text-align: justify !important; }\n  .q-card .sol-step > div.rev { text-align: justify !important; }\n  .q-card .sol-step > div.pt, .q-card .sol-step > div.sec { text-align: left !important; }\n  .q-card .sol-step > div.eq { color: #FFFFFF; font-weight: 600; text-align: left !important; }\n</style>\n<div style=\"padding: 4px 2px;\">\n  <div class=\"q-card\">\n    <div class=\"q-title\">Q1.</div>\n    <div class=\"q-text\">The development of a country can generally be determined by:<br/>(i) its per capita income<br/>(ii) its average literacy level<br/>(iii) health status of its people<br/>(iv) all the above</div>\n    <div class=\"sol-box\"><div class=\"sol-title\">Answer:</div><div class=\"sol-step\"><div class=\"pt\"><b>(iv) all the above</b> — the World Bank uses per capita income, while the UNDP's HDI also uses literacy (education) and health.</div></div></div>\n  </div>\n\n  <div class=\"q-card\">\n    <div class=\"q-title\">Q2.</div>\n    <div class=\"q-text\">Which of the following neighbouring countries has better performance in terms of human development than India?<br/>(i) Bangladesh<br/>(ii) Sri Lanka<br/>(iii) Nepal<br/>(iv) Pakistan</div>\n    <div class=\"sol-box\"><div class=\"sol-title\">Answer:</div><div class=\"sol-step\"><div class=\"pt\"><b>(ii) Sri Lanka</b></div></div></div>\n  </div>\n\n  <div class=\"q-card\">\n    <div class=\"q-title\">Q3.</div>\n    <div class=\"q-text\">Assume there are four families in a country. The average per capita income of these families is Rs 15,000. If the income of three families is Rs 10,000, Rs 20,000 and Rs 12,000 respectively, what is the income of the fourth family?<br/>(i) Rs 7,500 &nbsp;&nbsp; (ii) Rs 3,000 &nbsp;&nbsp; (iii) Rs 2,000 &nbsp;&nbsp; (iv) Rs 6,000</div>\n    <div class=\"sol-box\"><div class=\"sol-title\">Answer:</div><div class=\"sol-step\"><div class=\"eq\">Total income of 4 families = 4 × 15,000 = Rs 60,000</div><div class=\"eq\">Income of 3 families = 10,000 + 20,000 + 12,000 = Rs 42,000</div><div class=\"eq\">Income of 4th family = 60,000 − 42,000 = Rs 18,000</div><div class=\"pt\">The correct answer is <b>Rs 18,000</b>, which is <b>not among the options</b> printed in the textbook.</div></div></div>\n  </div>\n\n  <div class=\"q-card\">\n    <div class=\"q-title\">Q4.</div>\n    <div class=\"q-text\">What is the main criterion used by the World Bank in classifying different countries? What are the limitations of this criterion, if any?</div>\n    <div class=\"sol-box\"><div class=\"sol-title\">Answer:</div><div class=\"sol-step\"><div class=\"pt\"><span class=\"lbl\">Criterion:</span> average or per capita income — total income of the country divided by its population.</div><div class=\"sec\">Limitations</div><div class=\"pt\">It hides disparities: it does not show how income is distributed among people.</div><div class=\"pt\">It ignores other important aspects of well-being — health, education, freedom, security and environment.</div><div class=\"pt\">Income alone does not show the goods and services (like public facilities) that people can actually use.</div></div></div>\n  </div>\n\n  <div class=\"q-card\">\n    <div class=\"q-title\">Q5.</div>\n    <div class=\"q-text\">In what respects is the criterion used by the UNDP for measuring development different from the one used by the World Bank?</div>\n    <div class=\"sol-box\"><div class=\"sol-title\">Answer:</div><div class=\"sol-step\"><div class=\"tbl-wrap\"><table class=\"dt\"><tr><th>World Bank</th><th>UNDP</th></tr><tr><td>Uses only per capita income</td><td>Uses health, education and per capita income</td></tr><tr><td>Classifies countries as rich, middle or low income</td><td>Ranks countries by the Human Development Index</td></tr><tr><td>Narrow, income-based measure</td><td>Broader measure of people's well-being</td></tr></table></div></div></div>\n  </div>\n\n  <div class=\"q-card\">\n    <div class=\"q-title\">Q6.</div>\n    <div class=\"q-text\">Why do we use averages? Are there any limitations to their use? Illustrate with your own examples related to development.</div>\n    <div class=\"sol-box\"><div class=\"sol-title\">Answer:</div><div class=\"sol-step\"><div class=\"pt\"><b>Use:</b> averages allow comparison between countries or states with different populations, e.g. per capita income.</div><div class=\"pt\"><b>Limitation:</b> they hide disparities in distribution.</div><div class=\"pt\"><b>Example:</b> two countries both have an average income of Rs 10,000. In one, all five citizens earn about Rs 10,000; in the other, four earn Rs 500 each and one earns Rs 48,000. The averages are equal, but the second country is far more unequal.</div></div></div>\n  </div>\n\n  <div class=\"q-card\">\n    <div class=\"q-title\">Q7.</div>\n    <div class=\"q-text\">Kerala, with lower per capita income has a better human development ranking than Haryana. Hence, per capita income is not a useful criterion at all and should not be used to compare states. Do you agree? Discuss.</div>\n    <div class=\"sol-box\"><div class=\"sol-title\">Answer:</div><div class=\"sol-step\"><div class=\"pt\"><b>No</b>, we do not fully agree.</div><div class=\"pt\">Per capita income is a useful measure of the material goods and services people can buy, and it is easy to compare.</div><div class=\"pt\">But it is <b>not sufficient</b>: Kerala has lower IMR and higher literacy than Haryana because of better public health and education facilities.</div><div class=\"pt\">So per capita income should be used along with other indicators such as health, education and public facilities.</div></div></div>\n  </div>\n\n  <div class=\"q-card\">\n    <div class=\"q-title\">Q8.</div>\n    <div class=\"q-text\">Find out the present sources of energy that are used by the people in India. What could be the other possibilities fifty years from now?</div>\n    <div class=\"sol-box\"><div class=\"sol-title\">Answer:</div><div class=\"sol-step\"><div class=\"pt\"><span class=\"lbl\">Present sources:</span> coal, petroleum, natural gas, electricity from thermal and hydro power, firewood, cattle dung cake, and increasingly solar and wind energy.</div><div class=\"pt\"><span class=\"lbl\">Possibilities in fifty years:</span> much greater use of solar, wind, tidal, geothermal and nuclear energy, biogas, hydrogen and electric vehicles, as fossil fuels are non-renewable and polluting.</div></div></div>\n  </div>\n\n  <div class=\"q-card\">\n    <div class=\"q-title\">Q9.</div>\n    <div class=\"q-text\">Why is the issue of sustainability important for development?</div>\n    <div class=\"sol-box\"><div class=\"sol-title\">Answer:</div><div class=\"sol-step\"><div class=\"pt\">Many resources are limited; non-renewable resources like crude oil will get exhausted.</div><div class=\"pt\">Even renewable resources like groundwater are being overused (nearly one-third of the country overuses groundwater).</div><div class=\"pt\">Present development should not harm the needs of future generations.</div><div class=\"pt\">Environmental degradation does not respect boundaries and affects everyone.</div></div></div>\n  </div>\n\n  <div class=\"q-card\">\n    <div class=\"q-title\">Q10.</div>\n    <div class=\"q-text\">“The Earth has enough resources to meet the needs of all but not enough to satisfy the greed of even one person.” How is this statement relevant to the discussion of development? Discuss.</div>\n    <div class=\"sol-box\"><div class=\"sol-title\">Answer:</div><div class=\"sol-step\"><div class=\"pt\">The statement, by Mahatma Gandhi, means that resources are enough for everyone's needs if used wisely.</div><div class=\"pt\">Greed leads to over-exploitation of resources, unequal distribution and environmental damage.</div><div class=\"pt\">So development should be <b>sustainable and equitable</b>, using resources carefully and sharing them fairly.</div></div></div>\n  </div>\n\n  <div class=\"q-card\">\n    <div class=\"q-title\">Q11.</div>\n    <div class=\"q-text\">List a few examples of environmental degradation that you may have observed around you.</div>\n    <div class=\"sol-box\"><div class=\"sol-title\">Answer:</div><div class=\"sol-step\"><div class=\"pt\">Air pollution from vehicles, factories and burning of waste.</div><div class=\"pt\">Water pollution of rivers and ponds by sewage and industrial waste.</div><div class=\"pt\">Deforestation and loss of green cover; falling groundwater levels.</div><div class=\"pt\">Soil degradation from overuse of chemicals; heaps of plastic waste.</div></div></div>\n  </div>\n\n  <div class=\"q-card\">\n    <div class=\"q-title\">Q12.</div>\n    <div class=\"q-text\">For each of the items given in the textbook table of India and its neighbours (per capita income, life expectancy, schooling and HDI rank), find out which country is at the top and which is at the bottom.</div>\n    <div class=\"sol-box\"><div class=\"sol-title\">Answer:</div><div class=\"sol-step\"><div class=\"pt\"><b>Top on every item:</b> Sri Lanka.</div><div class=\"pt\"><b>Bottom</b> (as per the table in the current edition): per capita income — Nepal; life expectancy — Myanmar; expected years of schooling — Pakistan; HDI rank — Pakistan.</div><div class=\"pt\">Always read the values from the table printed in your edition, as figures are updated.</div></div></div>\n  </div>\n\n  <div class=\"q-card\">\n    <div class=\"q-title\">Q13.</div>\n    <div class=\"q-text\">The textbook table shows the proportion of undernourished adults in Kerala, Karnataka, Madhya Pradesh and all states.<br/>(i) Compare the nutritional level of people in Kerala and Madhya Pradesh.<br/>(ii) Can you guess why many people in the country are undernourished even though it is argued that there is enough food in the country? Describe in your own words.</div>\n    <div class=\"sol-box\"><div class=\"sol-title\">Answer:</div><div class=\"sol-step\"><div class=\"sub-q\">(i)</div><div class=\"pt\">The proportion of undernourished men and women is much <b>lower in Kerala</b> than in Madhya Pradesh, so the nutritional level in Kerala is better.</div><div class=\"sub-q\">(ii)</div><div class=\"pt\">Many people are too poor to buy enough nutritious food.</div><div class=\"pt\">The Public Distribution System does not work well in many states, and food does not reach those who need it.</div><div class=\"pt\">Lack of awareness about a balanced diet, and poor health facilities, also cause undernourishment.</div></div></div>\n  </div>\n\n</div>",
    "se1-ex-board": "<style>\n  .q-card { background: rgba(15, 23, 42, 0.75); border: 1.5px solid rgba(253, 200, 48, 0.35); border-radius: 12px; padding: 16px; margin-bottom: 24px; box-shadow: 0 4px 15px rgba(0,0,0,0.25); }\n  .q-title { font-size: 17.5px; font-weight: 700; color: #FDC830; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }\n  .q-text { font-size: 15.5px; color: #FFFFFF; line-height: 1.9; margin-bottom: 12px; font-weight: 500; }\n  .sub-q { font-size: 15px; font-weight: 600; margin: 12px 0 4px; line-height: 1.8; }\n  .sol-box { background: rgba(0, 0, 0, 0.32); border-left: 3.5px solid #FDC830; border-radius: 8px; padding: 14px 16px; margin-top: 12px; }\n  .sol-title { font-size: 14.5px; font-weight: 700; color: #FFF3C4; margin-bottom: 8px; }\n  .sol-step { font-size: 15px; color: #E2E8F0; line-height: 1.9; }\n  .sol-step div { margin-top: 5px; margin-bottom: 5px; }\n  .lbl { color: #FFF3C4; font-weight: 700; }\n  .hl { color: #FDC830; font-weight: 700; }\n  .rev { text-align: justify; }\n  .pt { text-align: left !important; padding-left: 16px; text-indent: -16px; }\n  .pt::before { content: \"•\"; color: #FDC830; font-weight: 700; display: inline-block; width: 16px; text-indent: 0; }\n  .sec { color: #FDC830; font-weight: 700; font-size: 15.5px; margin-top: 14px !important; text-align: left !important; }\n  .exam { background: rgba(253, 200, 48, 0.10); border: 1.5px dashed #FDC830; border-radius: 8px; padding: 10px 12px; margin: 12px 0 4px; color: #FFFFFF; text-align: left; line-height: 1.8; }\n  .exam-t { color: #FDC830; font-weight: 700; font-size: 14.5px; display: block; margin-bottom: 2px; }\n  .diagram-card { background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(253, 200, 48, 0.4); border-radius: 10px; padding: 10px; margin: 14px 0; text-align: center; }\n  .diagram-wrapper { display: block; background: #1E1E2E; border-radius: 8px; padding: 4px; margin: 0 auto; width: 100%; box-sizing: border-box; overflow: hidden; }\n  .diagram-wrapper svg { display: block; width: 100%; height: auto; max-width: 100%; margin: 0 auto; }\n  .diagram-caption { color: #CBD5E1; font-size: 13.5px; text-align: center; margin-top: 8px; font-weight: 500; }\n  .badge { display: inline-block; background: rgba(253, 200, 48, 0.18); border: 1px solid #FDC830; color: #FFF3C4; border-radius: 6px; padding: 0 8px; font-size: 12.5px; font-weight: 700; }\n  .tbl-wrap { width: 100%; overflow-x: auto; margin: 8px 0; }\n  .dt { width: 100%; border-collapse: collapse; font-size: 13px; }\n  .dt th, .dt td { border: 1px solid rgba(255, 255, 255, 0.2); padding: 6px 5px; color: #FFFFFF; line-height: 1.45; text-align: left; vertical-align: top; }\n  .dt th { background: rgba(253, 200, 48, 0.2); color: #FFF3C4; }\n  .q-card .q-text, .q-card .sub-q { color: #FDC830 !important; text-align: justify !important; }\n  .q-card .sol-step > div.rev { text-align: justify !important; }\n  .q-card .sol-step > div.pt, .q-card .sol-step > div.sec { text-align: left !important; }\n  .q-card .sol-step > div.eq { color: #FFFFFF; font-weight: 600; text-align: left !important; }\n</style>\n<div style=\"padding: 4px 2px;\">\n  <div class=\"q-card\"><div class=\"q-title\">✦ Section A: Very Short Answer (1 Mark)</div></div>\n\n  <div class=\"q-card\">\n    <div class=\"q-title\">Q1. <span class=\"badge\">1 Mark</span></div>\n    <div class=\"q-text\">What is per capita income?</div>\n    <div class=\"sol-box\"><div class=\"sol-title\">Answer:</div><div class=\"sol-step\"><div class=\"pt\">Total income of a country divided by its total population.</div></div></div>\n  </div>\n\n  <div class=\"q-card\">\n    <div class=\"q-title\">Q2. <span class=\"badge\">1 Mark</span></div>\n    <div class=\"q-text\">Which organisation publishes the World Development Report?</div>\n    <div class=\"sol-box\"><div class=\"sol-title\">Answer:</div><div class=\"sol-step\"><div class=\"pt\">The <b>World Bank</b>.</div></div></div>\n  </div>\n\n  <div class=\"q-card\">\n    <div class=\"q-title\">Q3. <span class=\"badge\">1 Mark</span></div>\n    <div class=\"q-text\">Which organisation publishes the Human Development Report?</div>\n    <div class=\"sol-box\"><div class=\"sol-title\">Answer:</div><div class=\"sol-step\"><div class=\"pt\">The <b>UNDP</b>.</div></div></div>\n  </div>\n\n  <div class=\"q-card\">\n    <div class=\"q-title\">Q4. <span class=\"badge\">1 Mark</span></div>\n    <div class=\"q-text\">What is infant mortality rate?</div>\n    <div class=\"sol-box\"><div class=\"sol-title\">Answer:</div><div class=\"sol-step\"><div class=\"pt\">Number of children dying before age one per 1000 live births in a year.</div></div></div>\n  </div>\n\n  <div class=\"q-card\">\n    <div class=\"q-title\">Q5. <span class=\"badge\">1 Mark</span></div>\n    <div class=\"q-text\">Define literacy rate.</div>\n    <div class=\"sol-box\"><div class=\"sol-title\">Answer:</div><div class=\"sol-step\"><div class=\"pt\">Proportion of literate population in the 7 and above age group.</div></div></div>\n  </div>\n\n  <div class=\"q-card\">\n    <div class=\"q-title\">Q6. <span class=\"badge\">1 Mark</span></div>\n    <div class=\"q-text\">In which income group is India placed by the World Bank?</div>\n    <div class=\"sol-box\"><div class=\"sol-title\">Answer:</div><div class=\"sol-step\"><div class=\"pt\"><b>Lower-middle income</b>.</div></div></div>\n  </div>\n\n  <div class=\"q-card\">\n    <div class=\"q-title\">Q7. <span class=\"badge\">1 Mark</span></div>\n    <div class=\"q-text\">Which neighbour of India has a better HDI rank than India?</div>\n    <div class=\"sol-box\"><div class=\"sol-title\">Answer:</div><div class=\"sol-step\"><div class=\"pt\"><b>Sri Lanka</b>.</div></div></div>\n  </div>\n\n  <div class=\"q-card\">\n    <div class=\"q-title\">Q8. <span class=\"badge\">1 Mark</span></div>\n    <div class=\"q-text\">Give an example of a non-renewable resource.</div>\n    <div class=\"sol-box\"><div class=\"sol-title\">Answer:</div><div class=\"sol-step\"><div class=\"pt\"><b>Crude oil</b> (also coal, minerals).</div></div></div>\n  </div>\n\n  <div class=\"q-card\">\n    <div class=\"q-title\">Q9. <span class=\"badge\">1 Mark</span></div>\n    <div class=\"q-text\">What is meant by sustainable development?</div>\n    <div class=\"sol-box\"><div class=\"sol-title\">Answer:</div><div class=\"sol-step\"><div class=\"pt\">Development that meets present needs without harming future generations.</div></div></div>\n  </div>\n\n  <div class=\"q-card\">\n    <div class=\"q-title\">Q10. <span class=\"badge\">1 Mark</span></div>\n    <div class=\"q-text\">Why does Kerala have a low infant mortality rate?</div>\n    <div class=\"sol-box\"><div class=\"sol-title\">Answer:</div><div class=\"sol-step\"><div class=\"pt\">Because of adequate provision of basic health and educational facilities.</div></div></div>\n  </div>\n\n  <div class=\"q-card\"><div class=\"q-title\">✦ Section B: Short Answer (3 Marks)</div></div>\n\n  <div class=\"q-card\">\n    <div class=\"q-title\">Q11. <span class=\"badge\">3 Marks</span></div>\n    <div class=\"q-text\">“Different people can have different and conflicting developmental goals.” Explain with examples.</div>\n    <div class=\"sol-box\"><div class=\"sol-title\">Answer:</div><div class=\"sol-step\"><div class=\"pt\">Landless labourers want more days of work and better wages; prosperous farmers want higher support prices.</div><div class=\"pt\">A girl from a rich family wants the same freedom as her brother.</div><div class=\"pt\">Industrialists may want a dam for electricity, but it may displace adivasis — one person's development can harm another.</div></div></div>\n  </div>\n\n  <div class=\"q-card\">\n    <div class=\"q-title\">Q12. <span class=\"badge\">3 Marks</span></div>\n    <div class=\"q-text\">Why are public facilities important for development?</div>\n    <div class=\"sol-box\"><div class=\"sol-title\">Answer:</div><div class=\"sol-step\"><div class=\"pt\">Money cannot buy everything — pollution-free environment, unadulterated medicines, protection from disease.</div><div class=\"pt\">Collective provision of security, schools and health centres is cheaper.</div><div class=\"pt\">E.g. Kerala's health, education and PDS facilities give it better human development despite lower per capita income.</div></div></div>\n  </div>\n\n  <div class=\"q-card\">\n    <div class=\"q-title\">Q13. <span class=\"badge\">3 Marks</span></div>\n    <div class=\"q-text\">What are the components of the Human Development Index?</div>\n    <div class=\"sol-box\"><div class=\"sol-title\">Answer:</div><div class=\"sol-step\"><div class=\"pt\">Life expectancy at birth (health).</div><div class=\"pt\">Mean years of schooling and expected years of schooling (education).</div><div class=\"pt\">Per capita income (standard of living).</div></div></div>\n  </div>\n\n  <div class=\"q-card\">\n    <div class=\"q-title\">Q14. <span class=\"badge\">3 Marks</span></div>\n    <div class=\"q-text\">Why is per capita income not a complete indicator of development?</div>\n    <div class=\"sol-box\"><div class=\"sol-title\">Answer:</div><div class=\"sol-step\"><div class=\"pt\">It is an average and hides inequalities in distribution.</div><div class=\"pt\">It does not measure health, education, freedom or environment.</div><div class=\"pt\">States like Kerala show better development than richer states like Haryana.</div></div></div>\n  </div>\n\n  <div class=\"q-card\"><div class=\"q-title\">✦ Section C: Long Answer (5 Marks)</div></div>\n\n  <div class=\"q-card\">\n    <div class=\"q-title\">Q15. <span class=\"badge\">5 Marks</span></div>\n    <div class=\"q-text\">Compare the criteria used by the World Bank and the UNDP for measuring development. Which is better and why?</div>\n    <div class=\"sol-box\"><div class=\"sol-title\">Answer:</div><div class=\"sol-step\"><div class=\"pt\"><b>World Bank:</b> uses per capita income; classifies countries as high, middle or low income.</div><div class=\"pt\"><b>UNDP:</b> uses the HDI — health (life expectancy), education (schooling) and per capita income.</div><div class=\"pt\">Per capita income alone hides inequality and ignores health and education.</div><div class=\"pt\">The UNDP's approach is better because development is about people's well-being, not only income.</div><div class=\"pt\">E.g. Sri Lanka has a better HDI than India; Kerala does better than Haryana on health and education.</div></div></div>\n  </div>\n\n  <div class=\"q-card\">\n    <div class=\"q-title\">Q16. <span class=\"badge\">5 Marks</span></div>\n    <div class=\"q-text\">Explain the importance of sustainability for development with examples.</div>\n    <div class=\"sol-box\"><div class=\"sol-title\">Answer:</div><div class=\"sol-step\"><div class=\"pt\">Present levels of development may not be sustainable.</div><div class=\"pt\"><b>Groundwater:</b> renewable but overused — nearly one-third of the country overuses it.</div><div class=\"pt\"><b>Crude oil:</b> non-renewable; reserves may run out, so countries must find substitutes.</div><div class=\"pt\">Environmental degradation crosses boundaries and affects everyone.</div><div class=\"pt\">Development must meet present needs without harming future generations.</div></div></div>\n  </div>\n\n  <div class=\"q-card\">\n    <div class=\"q-title\">Q17. <span class=\"badge\">4 Marks</span></div>\n    <div class=\"q-text\"><b>Source-based:</b> Read the source and answer the questions.<br/><i>“Money in your pocket cannot buy all the goods and services that you may need to live well. Income by itself is not a completely adequate indicator of material goods and services that citizens are able to use. Normally, your money cannot buy you a pollution-free environment or ensure that you get unadulterated medicines.”</i><br/>(i) Why is income not an adequate indicator? (1)<br/>(ii) Name one thing money cannot buy. (1)<br/>(iii) How can such needs be met? (2)</div>\n    <div class=\"sol-box\"><div class=\"sol-title\">Answer:</div><div class=\"sol-step\"><div class=\"sub-q\">(i)</div><div class=\"pt\">It does not show all the goods and services, like public facilities, that people can use.</div><div class=\"sub-q\">(ii)</div><div class=\"pt\">A pollution-free environment (or unadulterated medicines).</div><div class=\"sub-q\">(iii)</div><div class=\"pt\">Through collective, public provision — health centres, schools, clean environment.</div><div class=\"pt\">The whole community must act, e.g. to prevent infectious diseases.</div></div></div>\n  </div>\n\n</div>"
  },
  "introduction": "What does 'development' mean to you? A new smartphone? For a landless farmer, it might mean more days of work. Different people have different goals. Let's explore how we measure development, not just by money, but by health, education, and fairness.",
  "definitions": [],
  "keyPoints": [],
  "formulas": [],
  "crux": [],
  "mcqs": [
    {
      "id": "se1-mcq-1",
      "question": "<div style='text-align: justify;'>The development of a country can generally be determined by:</div>",
      "options": [
        "A):   Per capita income",
        "B):   Average literacy level",
        "C):   All the above",
        "D):   Health status of people"
      ],
      "correctAnswer": "C",
      "explanation": "<div style='text-align: justify;'>Income, education and health together show development.</div>"
    },
    {
      "id": "se1-mcq-2",
      "question": "<div style='text-align: justify;'>Which neighbour performs better than India in human development?</div>",
      "options": [
        "A):   Sri Lanka",
        "B):   Bangladesh",
        "C):   Nepal",
        "D):   Pakistan"
      ],
      "correctAnswer": "A",
      "explanation": "<div style='text-align: justify;'>Sri Lanka has a much better HDI rank.</div>"
    },
    {
      "id": "se1-mcq-3",
      "question": "<div style='text-align: justify;'>Per capita income is calculated as:</div>",
      "options": [
        "A):   Total income × population",
        "B):   Total income − population",
        "C):   Population ÷ total income",
        "D):   Total income ÷ total population"
      ],
      "correctAnswer": "D",
      "explanation": "<div style='text-align: justify;'>It is also called average income.</div>"
    },
    {
      "id": "se1-mcq-4",
      "question": "<div style='text-align: justify;'>The main criterion used by the World Bank to classify countries is:</div>",
      "options": [
        "A):   Literacy",
        "B):   Per capita income",
        "C):   Life expectancy",
        "D):   HDI"
      ],
      "correctAnswer": "B",
      "explanation": "<div style='text-align: justify;'>It groups countries into income categories.</div>"
    },
    {
      "id": "se1-mcq-5",
      "question": "<div style='text-align: justify;'>The Human Development Report is published by the:</div>",
      "options": [
        "A):   UNDP",
        "B):   World Bank",
        "C):   IMF",
        "D):   WTO"
      ],
      "correctAnswer": "A",
      "explanation": "<div style='text-align: justify;'>It ranks countries by HDI.</div>"
    },
    {
      "id": "se1-mcq-6",
      "question": "<div style='text-align: justify;'>India is classified by the World Bank as a:</div>",
      "options": [
        "A):   High income country",
        "B):   Low income country",
        "C):   Lower-middle income country",
        "D):   Upper-middle income country"
      ],
      "correctAnswer": "C",
      "explanation": "<div style='text-align: justify;'>Its per capita income is in the lower-middle range.</div>"
    },
    {
      "id": "se1-mcq-7",
      "question": "<div style='text-align: justify;'>The main limitation of averages is that they:</div>",
      "options": [
        "A):   Are hard to calculate",
        "B):   Hide disparities",
        "C):   Need large data",
        "D):   Are always wrong"
      ],
      "correctAnswer": "B",
      "explanation": "<div style='text-align: justify;'>They do not show distribution of income.</div>"
    },
    {
      "id": "se1-mcq-8",
      "question": "<div style='text-align: justify;'>Infant mortality rate shows children dying before the age of:</div>",
      "options": [
        "A):   Six months",
        "B):   Five years",
        "C):   Ten years",
        "D):   One year"
      ],
      "correctAnswer": "D",
      "explanation": "<div style='text-align: justify;'>It is per 1000 live births in a year.</div>"
    },
    {
      "id": "se1-mcq-9",
      "question": "<div style='text-align: justify;'>Literacy rate measures the literate population aged:</div>",
      "options": [
        "A):   5 and above",
        "B):   6 and above",
        "C):   10 and above",
        "D):   7 and above"
      ],
      "correctAnswer": "D",
      "explanation": "<div style='text-align: justify;'>It is the proportion of literates in that group.</div>"
    },
    {
      "id": "se1-mcq-10",
      "question": "<div style='text-align: justify;'>Net attendance ratio considers children of the age group:</div>",
      "options": [
        "A):   6–10 years",
        "B):   14–15 years",
        "C):   10–12 years",
        "D):   18–20 years"
      ],
      "correctAnswer": "B",
      "explanation": "<div style='text-align: justify;'>It shows school attendance.</div>"
    },
    {
      "id": "se1-mcq-11",
      "question": "<div style='text-align: justify;'>Kerala has a low infant mortality rate mainly because of:</div>",
      "options": [
        "A):   High per capita income",
        "B):   Industries",
        "C):   Basic health and educational facilities",
        "D):   Mining"
      ],
      "correctAnswer": "C",
      "explanation": "<div style='text-align: justify;'>Public facilities matter for development.</div>"
    },
    {
      "id": "se1-mcq-12",
      "question": "<div style='text-align: justify;'>Which of these can money NOT buy?</div>",
      "options": [
        "A):   A pollution-free environment",
        "B):   Clothes",
        "C):   Food",
        "D):   Books"
      ],
      "correctAnswer": "A",
      "explanation": "<div style='text-align: justify;'>It needs collective action.</div>"
    },
    {
      "id": "se1-mcq-13",
      "question": "<div style='text-align: justify;'>The HDI does NOT include:</div>",
      "options": [
        "A):   Life expectancy",
        "B):   Mean years of schooling",
        "C):   Per capita income",
        "D):   Number of factories"
      ],
      "correctAnswer": "D",
      "explanation": "<div style='text-align: justify;'>HDI covers health, education and income.</div>"
    },
    {
      "id": "se1-mcq-14",
      "question": "<div style='text-align: justify;'>Mean years of schooling refers to people aged:</div>",
      "options": [
        "A):   25 and above",
        "B):   15 and above",
        "C):   5 and above",
        "D):   60 and above"
      ],
      "correctAnswer": "A",
      "explanation": "<div style='text-align: justify;'>Expected years of schooling refers to children aged 5.</div>"
    },
    {
      "id": "se1-mcq-15",
      "question": "<div style='text-align: justify;'>Which is a non-renewable resource?</div>",
      "options": [
        "A):   Groundwater",
        "B):   Forests",
        "C):   Crude oil",
        "D):   Solar energy"
      ],
      "correctAnswer": "C",
      "explanation": "<div style='text-align: justify;'>Once used, it cannot be replenished.</div>"
    },
    {
      "id": "se1-mcq-16",
      "question": "<div style='text-align: justify;'>Groundwater is a:</div>",
      "options": [
        "A):   Non-renewable resource",
        "B):   Renewable resource that can be overused",
        "C):   Mineral",
        "D):   Fossil fuel"
      ],
      "correctAnswer": "B",
      "explanation": "<div style='text-align: justify;'>It is replenished by rain but overused.</div>"
    },
    {
      "id": "se1-mcq-17",
      "question": "<div style='text-align: justify;'>Sustainable development means:</div>",
      "options": [
        "A):   Fast growth at any cost",
        "B):   Meeting present needs without harming future generations",
        "C):   Only industrial growth",
        "D):   Using all resources now"
      ],
      "correctAnswer": "B",
      "explanation": "<div style='text-align: justify;'>It balances present and future needs.</div>"
    },
    {
      "id": "se1-mcq-18",
      "question": "<div style='text-align: justify;'>'The Earth has enough resources to meet the needs of all but not the greed of even one person' was said by:</div>",
      "options": [
        "A):   Nehru",
        "B):   Tagore",
        "C):   Ambedkar",
        "D):   Mahatma Gandhi"
      ],
      "correctAnswer": "D",
      "explanation": "<div style='text-align: justify;'>It warns against over-exploitation.</div>"
    },
    {
      "id": "se1-mcq-19",
      "question": "<div style='text-align: justify;'>A girl from a rich urban family is most likely to want:</div>",
      "options": [
        "A):   Higher support prices",
        "B):   More days of work",
        "C):   As much freedom as her brother",
        "D):   Irrigation"
      ],
      "correctAnswer": "C",
      "explanation": "<div style='text-align: justify;'>Development goals differ among people.</div>"
    },
    {
      "id": "se1-mcq-20",
      "question": "<div style='text-align: justify;'>The developmental goal of landless rural labourers is:</div>",
      "options": [
        "A):   More days of work and better wages",
        "B):   Higher studies abroad",
        "C):   High support prices",
        "D):   A big car"
      ],
      "correctAnswer": "A",
      "explanation": "<div style='text-align: justify;'>Their main need is regular work.</div>"
    },
    {
      "id": "se1-mcq-21",
      "question": "<div style='text-align: justify;'>Four families have an average income of Rs 15,000; three earn 10,000, 20,000 and 12,000. The fourth earns:</div>",
      "options": [
        "A):   Rs 7,500",
        "B):   Rs 6,000",
        "C):   Rs 18,000",
        "D):   Rs 3,000"
      ],
      "correctAnswer": "C",
      "explanation": "<div style='text-align: justify;'>60,000 − 42,000 = 18,000.</div>"
    },
    {
      "id": "se1-mcq-22",
      "question": "<div style='text-align: justify;'>Arrange the steps to find per capita income: (i) Divide by population (ii) Add up incomes of all people (iii) Get the average income</div>",
      "options": [
        "A):   (ii), (i), (iii)",
        "B):   (i), (ii), (iii)",
        "C):   (iii), (ii), (i)",
        "D):   (ii), (iii), (i)"
      ],
      "correctAnswer": "A",
      "explanation": "<div style='text-align: justify;'>Total income ÷ population = average income.</div>"
    },
    {
      "id": "se1-mcq-23",
      "question": "<div style='text-align: justify;'>Match: (P) World Bank (Q) UNDP (R) IMR (S) Per capita income — with (1) HDI (2) Average income criterion (3) Total income ÷ population (4) Deaths before age one</div>",
      "options": [
        "A):   P-3, Q-1, R-4, S-2",
        "B):   P-1, Q-2, R-4, S-3",
        "C):   P-2, Q-4, R-1, S-3",
        "D):   P-2, Q-1, R-4, S-3"
      ],
      "correctAnswer": "D",
      "explanation": "<div style='text-align: justify;'>Each matches its description.</div>"
    },
    {
      "id": "se1-mcq-24",
      "question": "<div style='text-align: justify;'>Assertion (A): Kerala has a better human development record than Haryana. Reason (R): Kerala has adequate basic health and educational facilities.</div>",
      "options": [
        "A):   Both A and R are true and R is the correct explanation of A.",
        "B):   Both A and R are true but R is not the correct explanation of A.",
        "C):   A is true but R is false.",
        "D):   A is false but R is true."
      ],
      "correctAnswer": "A",
      "explanation": "<div style='text-align: justify;'>Public facilities explain Kerala's better record.</div>"
    },
    {
      "id": "se1-mcq-25",
      "question": "<div style='text-align: justify;'>Assertion (A): Averages show how income is distributed among people. Reason (R): Averages are useful for comparing countries with different populations.</div>",
      "options": [
        "A):   Both A and R are true and R is the correct explanation of A.",
        "B):   Both A and R are true but R is not the correct explanation of A.",
        "C):   A is true but R is false.",
        "D):   A is false but R is true."
      ],
      "correctAnswer": "D",
      "explanation": "<div style='text-align: justify;'>Averages hide distribution; R is true.</div>"
    }
  ],
  "summary": [],
  "exercises": [
    {
      "id": "se1-ex-1",
      "name": "Exercise",
      "questions": []
    },
    {
      "id": "se1-ex-board",
      "name": "Board Qs",
      "questions": []
    }
  ],
  "examples": []
};
