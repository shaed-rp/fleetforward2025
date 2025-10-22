import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Factory, DollarSign, Globe, Battery, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <header className="container py-12 md:py-16">
        <div className="text-center space-y-6">
          <Badge variant="outline" className="text-emerald-400 border-emerald-400/50 px-4 py-1.5 text-sm">
            Fleet Forward 2025 Panel
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Chinese EV Impact
            <span className="block text-emerald-400 mt-2">Reshaping Global Markets</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            How China's electric vehicle revolution is transforming the automotive industry and challenging established players worldwide
          </p>
        </div>
      </header>

      {/* Executive Summary */}
      <section className="container py-8">
        <Card className="bg-slate-900/50 border-slate-800 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <Globe className="h-6 w-6 text-emerald-400" />
              Executive Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p className="text-lg leading-relaxed">
              China has emerged as the undisputed leader in electric vehicle production and sales, accounting for approximately <strong className="text-white">70% of global EV production</strong> and <strong className="text-white">62% of global EV sales</strong> in 2024. The country's domestic market reached <strong className="text-white">11.2 million EV registrations</strong> in 2024, representing a <strong className="text-white">38.2% increase</strong> from the previous year.
            </p>
            <p className="text-lg leading-relaxed">
              This dominance stems from over a decade of strategic government investment totaling <strong className="text-white">$230.8 billion</strong> (2009-2023), aggressive vertical integration of the battery supply chain, and intense domestic competition among 150+ manufacturers that has driven innovation and cost reduction.
            </p>
            <p className="text-lg leading-relaxed">
              China is now the only major market where EVs are <strong className="text-white">cheaper than gasoline cars</strong>, with average BEV prices at $25,465 compared to $26,163 for gas vehicles—a 3% price advantage that accelerates mass adoption.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Key Metrics Grid */}
      <section className="container py-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Market Metrics (2024)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-emerald-900/30 to-emerald-950/30 border-emerald-800/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-emerald-400 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Global Market Share
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-white mb-2">62%</div>
              <p className="text-slate-300">of global EV sales</p>
              <p className="text-xs text-slate-400 mt-3">Source: Visual Capitalist, Feb 2025</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-900/30 to-blue-950/30 border-blue-800/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-blue-400 flex items-center gap-2">
                <Factory className="h-5 w-5" />
                Production Dominance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-white mb-2">~70%</div>
              <p className="text-slate-300">of global EV production</p>
              <p className="text-xs text-slate-400 mt-3">12M+ of 17M global EVs produced</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-950/30 border-purple-800/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-purple-400 flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Domestic Sales 2024
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-white mb-2">11.2M</div>
              <p className="text-slate-300">vehicles (+38.2% YoY)</p>
              <p className="text-xs text-slate-400 mt-3">Source: Autovista24 / EV Volumes</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-900/30 to-amber-950/30 border-amber-800/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-amber-400 flex items-center gap-2">
                <Battery className="h-5 w-5" />
                Price Advantage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-white mb-2">-3%</div>
              <p className="text-slate-300">EVs cheaper than gas cars</p>
              <p className="text-xs text-slate-400 mt-3">$25,465 vs $26,163 average price</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-rose-900/30 to-rose-950/30 border-rose-800/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-rose-400 flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Government Investment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-white mb-2">$231B</div>
              <p className="text-slate-300">invested (2009-2023)</p>
              <p className="text-xs text-slate-400 mt-3">Source: CSIS / CNBC, Jun 2024</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-cyan-900/30 to-cyan-950/30 border-cyan-800/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-cyan-400 flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Market Penetration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-white mb-2">~50%</div>
              <p className="text-slate-300">of China's car sales are electric</p>
              <p className="text-xs text-slate-400 mt-3">Source: IEA Global EV Outlook 2025</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Top Manufacturers */}
      <section className="container py-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Top EV Manufacturers (2024)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-white">1. BYD</CardTitle>
              <Badge className="w-fit bg-emerald-500/20 text-emerald-400 border-emerald-500/50">Market Leader</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">2024 Deliveries:</span>
                <span className="text-white font-semibold">3.52M units</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Growth:</span>
                <span className="text-emerald-400 font-semibold">+28.2% YoY</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Market Share:</span>
                <span className="text-white font-semibold">31.4%</span>
              </div>
              <p className="text-xs text-slate-400 pt-2">Global sales: 4.27M NEVs (58.5% PHEV, 41.5% BEV)</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-white">2. Wuling (+ Baojun)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">2024 Deliveries:</span>
                <span className="text-white font-semibold">673,279 units</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Growth:</span>
                <span className="text-emerald-400 font-semibold">+43.8% YoY</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Market Share:</span>
                <span className="text-white font-semibold">6.0%</span>
              </div>
              <p className="text-xs text-slate-400 pt-2">Known for ultra-affordable mini EVs</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-white">3. Tesla China</CardTitle>
              <Badge className="w-fit bg-blue-500/20 text-blue-400 border-blue-500/50">Foreign Leader</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">2024 Deliveries:</span>
                <span className="text-white font-semibold">659,012 units</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Growth:</span>
                <span className="text-emerald-400 font-semibold">+7.6% YoY</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Market Share:</span>
                <span className="text-white font-semibold">5.9%</span>
              </div>
              <p className="text-xs text-slate-400 pt-2">Losing share to domestic competitors</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-white">4. Li Auto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">2024 Deliveries:</span>
                <span className="text-white font-semibold">500,984 units</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Growth:</span>
                <span className="text-emerald-400 font-semibold">+33.2% YoY</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Market Share:</span>
                <span className="text-white font-semibold">4.5%</span>
              </div>
              <p className="text-xs text-slate-400 pt-2">Premium EREV specialist</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-white">5. Geely (+ Galaxy)</CardTitle>
              <Badge className="w-fit bg-purple-500/20 text-purple-400 border-purple-500/50">Fast Riser</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">2024 Deliveries:</span>
                <span className="text-white font-semibold">458,464 units</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Growth:</span>
                <span className="text-emerald-400 font-semibold">+120.1% YoY</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Market Share:</span>
                <span className="text-white font-semibold">4.1%</span>
              </div>
              <p className="text-xs text-slate-400 pt-2">Doubled market share from 2.6% in 2023</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-white">6. Aito</CardTitle>
              <Badge className="w-fit bg-amber-500/20 text-amber-400 border-amber-500/50">Breakout Star</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">2024 Deliveries:</span>
                <span className="text-white font-semibold">386,817 units</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Growth:</span>
                <span className="text-emerald-400 font-semibold">+290.1% YoY</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Market Share:</span>
                <span className="text-white font-semibold">3.5%</span>
              </div>
              <p className="text-xs text-slate-400 pt-2">Huawei-backed brand with explosive growth</p>
            </CardContent>
          </Card>
        </div>
        <p className="text-center text-slate-400 text-sm mt-6">Source: Autovista24, February 2025</p>
      </section>

      {/* Competitive Advantages */}
      <section className="container py-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Competitive Advantages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-emerald-400">Cost Leadership</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-300">
              <p><strong className="text-white">60% lower prices</strong> than Western EVs</p>
              <p>Chinese EVs average <strong className="text-white">$25,465</strong> vs <strong className="text-white">$60,500</strong> in the US</p>
              <p>Lithium iron phosphate (LFP) batteries cost less than nickel-based alternatives</p>
              <p>Scale manufacturing with 150+ domestic competitors driving efficiency</p>
              <p className="text-xs text-slate-400 pt-2">Source: Visual Capitalist, Aug 2025</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-blue-400">Supply Chain Integration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-300">
              <p><strong className="text-white">Vertical integration</strong> from mining to manufacturing</p>
              <p>Control of <strong className="text-white">80%+</strong> of global battery production capacity</p>
              <p>Domestic sourcing reduces logistics costs and lead times</p>
              <p>Strategic control of critical minerals and refining</p>
              <p className="text-xs text-slate-400 pt-2">Source: FDD Analysis, Sep 2025</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-purple-400">Government Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-300">
              <p><strong className="text-white">$230.8 billion</strong> invested over 15 years (2009-2023)</p>
              <p>Purchase subsidies averaged <strong className="text-white">$4,600</strong> per vehicle in 2023</p>
              <p>Tax exemptions, charging infrastructure, and R&D support</p>
              <p>Preferential policies for domestic manufacturers</p>
              <p className="text-xs text-slate-400 pt-2">Source: CSIS / CNBC, Jun 2024</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-amber-400">Innovation Velocity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-300">
              <p>Intense domestic competition drives rapid iteration</p>
              <p>BYD alone invested <strong className="text-white">$7.5 billion</strong> in R&D in 2024</p>
              <p>Fast product cycles: new models every 6-12 months</p>
              <p>Leading in battery chemistry, software, and autonomous features</p>
              <p className="text-xs text-slate-400 pt-2">Source: CKGSB Knowledge, Jul 2025</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* US Market Impact */}
      <section className="container py-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Impact on US Market</h2>
        <Card className="bg-slate-900/50 border-slate-800 backdrop-blur">
          <CardContent className="pt-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-rose-400 mb-2">100%</div>
                <p className="text-slate-300">US tariff on Chinese EVs</p>
                <p className="text-xs text-slate-400 mt-2">Increased from 27.5% in May 2024</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">$7,500</div>
                <p className="text-slate-300">US EV tax credit</p>
                <p className="text-xs text-slate-400 mt-2">Inflation Reduction Act (2022)</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">$370B</div>
                <p className="text-slate-300">US clean tech investment</p>
                <p className="text-xs text-slate-400 mt-2">IRA total allocation</p>
              </div>
            </div>
            
            <div className="border-t border-slate-700 pt-6 space-y-4 text-slate-300">
              <h3 className="text-xl font-semibold text-white">Strategic Implications</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Chinese EVs effectively blocked from US market due to tariffs</li>
                <li>BYD could still offer cheapest US EV even with 100% tariff</li>
                <li>US automakers face pressure to accelerate EV development</li>
                <li>Battery supply chain remains heavily dependent on China</li>
                <li>Trade tensions escalating with EU also imposing tariffs</li>
              </ul>
              <p className="text-xs text-slate-400 pt-4">Sources: USTR Section 301 Actions, ASIL Insights (Dec 2024), Roosevelt Institute (May 2024)</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Timeline */}
      <section className="container py-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Milestones</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50">2009</Badge>
                </div>
                <div className="text-slate-300">
                  <p className="font-semibold text-white mb-1">EV Subsidies Begin</p>
                  <p>China launches comprehensive EV subsidy program, starting 15-year investment campaign</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50">2020</Badge>
                </div>
                <div className="text-slate-300">
                  <p className="font-semibold text-white mb-1">BYD Surpasses Tesla</p>
                  <p>BYD becomes world's largest EV manufacturer by volume, overtaking Tesla in global sales</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/50">2023</Badge>
                </div>
                <div className="text-slate-300">
                  <p className="font-semibold text-white mb-1">Price Parity Achieved</p>
                  <p>Chinese EVs reach price parity with gasoline cars, becoming first major market to achieve this milestone</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/50">May 2024</Badge>
                </div>
                <div className="text-slate-300">
                  <p className="font-semibold text-white mb-1">US Tariffs Quadrupled</p>
                  <p>United States increases tariffs on Chinese EVs from 25% to 100%, effectively blocking market entry</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Badge className="bg-rose-500/20 text-rose-400 border-rose-500/50">2024</Badge>
                </div>
                <div className="text-slate-300">
                  <p className="font-semibold text-white mb-1">Market Dominance</p>
                  <p>China captures 62% of global EV sales and 70% of production, with 11.2M domestic registrations</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/50">2025</Badge>
                </div>
                <div className="text-slate-300">
                  <p className="font-semibold text-white mb-1">Global Expansion</p>
                  <p>Chinese brands expand aggressively in Europe, Southeast Asia, and Latin America markets</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sources Section */}
      <section className="container py-8 pb-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Data Sources & References</h2>
        <Card className="bg-slate-900/50 border-slate-800 backdrop-blur">
          <CardContent className="pt-6">
            <div className="space-y-4 text-slate-300">
              <div>
                <h3 className="font-semibold text-white mb-2">Primary Sources:</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong className="text-emerald-400">Autovista24</strong> - "Which brand won the battle for China's EV market?" (February 25, 2025)
                    <br />
                    <a href="https://autovista24.autovistagroup.com/news/which-brand-won-the-battle-for-chinas-ev-market/" 
                       className="text-blue-400 hover:underline text-xs" target="_blank" rel="noopener noreferrer">
                      View Source
                    </a>
                  </li>
                  <li>
                    <strong className="text-emerald-400">Visual Capitalist</strong> - "Why EVs Are Now Cheaper Than Gas Cars in China" (August 22, 2025)
                    <br />
                    <a href="https://www.visualcapitalist.com/why-evs-are-now-cheaper-than-gas-cars-in-china/" 
                       className="text-blue-400 hover:underline text-xs" target="_blank" rel="noopener noreferrer">
                      View Source
                    </a>
                  </li>
                  <li>
                    <strong className="text-emerald-400">CNBC / CSIS</strong> - "China spent $230 billion to build its electric car industry" (June 21, 2024)
                    <br />
                    <a href="https://www.cnbc.com/2024/06/21/china-spent-230-billion-to-build-its-electric-car-industry-csis-says.html" 
                       className="text-blue-400 hover:underline text-xs" target="_blank" rel="noopener noreferrer">
                      View Source
                    </a>
                  </li>
                  <li>
                    <strong className="text-emerald-400">IEA</strong> - Global EV Outlook 2025
                    <br />
                    <a href="https://www.iea.org/reports/global-ev-outlook-2025" 
                       className="text-blue-400 hover:underline text-xs" target="_blank" rel="noopener noreferrer">
                      View Source
                    </a>
                  </li>
                  <li>
                    <strong className="text-emerald-400">EV Volumes</strong> - China EV Market Data (2024)
                  </li>
                  <li>
                    <strong className="text-emerald-400">USTR</strong> - Section 301 Tariff Actions on China
                    <br />
                    <a href="https://ustr.gov/issue-areas/enforcement/section-301-investigations/tariff-actions" 
                       className="text-blue-400 hover:underline text-xs" target="_blank" rel="noopener noreferrer">
                      View Source
                    </a>
                  </li>
                  <li>
                    <strong className="text-emerald-400">ASIL Insights</strong> - "Electric Vehicle Tariffs by the US, EU, and Canada" (December 2024)
                  </li>
                  <li>
                    <strong className="text-emerald-400">CKGSB Knowledge</strong> - "China NEV Boom: Tax Relief & Private Investment" (July 2025)
                  </li>
                  <li>
                    <strong className="text-emerald-400">FDD</strong> - "China Has Weaponized Battery Production" (September 2025)
                  </li>
                </ul>
              </div>
              
              <div className="border-t border-slate-700 pt-4">
                <p className="text-sm text-slate-400">
                  All statistics and data points presented in this analysis are sourced from the publications listed above, 
                  accessed and verified between October 2024 and October 2025. Market data reflects the most recent available 
                  information as of the publication dates cited.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="container py-8 text-center text-slate-400 border-t border-slate-800">
        <p className="text-sm">
          Prepared for Fleet Forward 2025 Panel Discussion
        </p>
        <p className="text-xs mt-2">
          Data compiled from industry reports, government sources, and market analysis firms
        </p>
      </footer>
    </div>
  );
}

