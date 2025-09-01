import jsPDF from 'jspdf'

export function generateGoogleMerchPDF() {
  const doc = new jsPDF()
  
  // Set font
  doc.setFont('helvetica')
  
  // Title
  doc.setFontSize(20)
  doc.setTextColor(255, 102, 0) // Orange color
  doc.text('GOOGLE MERCH SHOP', 20, 30)
  doc.text('CASE STUDY', 20, 45)
  
  doc.setFontSize(12)
  doc.setTextColor(0, 0, 0) // Black color
  doc.text('By: Abegail Fontanilla', 20, 60)
  doc.text('Data source: Google merch store sales data on GA4', 20, 70)
  
  // Project Background
  doc.setFontSize(16)
  doc.setTextColor(255, 102, 0)
  doc.text('PROJECT BACKGROUND:', 20, 90)
  
  doc.setFontSize(10)
  doc.setTextColor(0, 0, 0)
  const backgroundText = `I designed this case study to showcase my Google Analytics 4 (GA4) skills. I used a demo version of the Google Merch Shop's data, which comes with some limitations in terms of access and features. To make the project more meaningful, I created hypothetical objectives that a sales and executive team might have for an e-commerce business like this.`
  
  const splitBackground = doc.splitTextToSize(backgroundText, 170)
  doc.text(splitBackground, 20, 105)
  
  // Project Objectives
  doc.setFontSize(16)
  doc.setTextColor(255, 102, 0)
  doc.text('PROJECT OBJECTIVES:', 20, 140)
  
  doc.setFontSize(12)
  doc.setTextColor(0, 0, 0)
  doc.text('Sales Team:', 20, 155)
  doc.setFontSize(10)
  doc.text('• Identify the top-selling products that generate the highest revenue', 25, 165)
  doc.text('  in the past 28 days.', 25, 172)
  doc.text('• Analyze the purchase funnel to detect bottlenecks or drop-off points.', 25, 182)
  
  doc.setFontSize(12)
  doc.text('Executive Team:', 20, 200)
  doc.setFontSize(10)
  doc.text('• Analyze key performance indicators (KPIs) such as website traffic,', 25, 210)
  doc.text('  conversion rates, and revenue over the last 12 months.', 25, 217)
  doc.text('• Identify trends and patterns in website traffic and sales data', 25, 227)
  doc.text('  to support business strategy.', 25, 234)
  
  // Add new page
  doc.addPage()
  
  // Key Findings
  doc.setFontSize(16)
  doc.setTextColor(255, 102, 0)
  doc.text('KEY FINDINGS:', 20, 30)
  
  doc.setFontSize(12)
  doc.setTextColor(0, 0, 0)
  doc.text('Product Performance Analysis:', 20, 50)
  
  doc.setFontSize(10)
  doc.text('• Top 5 products: Chrome Dino Holiday Lodge Sweater, Google Campus Bike,', 25, 65)
  doc.text('  Chrome Dino Holiday Lodge Socks, Google Dartmouth Quilted Jacket,', 25, 72)
  doc.text('  and Android Merch Shop Holiday Collectible.', 25, 79)
  
  doc.text('• Significant drop-offs in purchase funnel:', 25, 95)
  doc.text('  - "Session start" to "View product": 69.8%', 30, 105)
  doc.text('  - "View product" to "Add to cart": 75.4%', 30, 112)
  doc.text('  - "Add to cart" to "Begin checkout": 46.2%', 30, 119)
  
  doc.setFontSize(12)
  doc.text('Year-over-Year Performance:', 20, 140)
  
  doc.setFontSize(10)
  doc.text('• Total Revenue: $2,117,718.07 (472.89% growth)', 25, 155)
  doc.text('• Total Users: 742,792 (364.29% increase)', 25, 165)
  doc.text('• New Users: 701,974 (457.2% increase)', 25, 175)
  doc.text('• Session Key Event Rate: 1.2% (4.64% increase)', 25, 185)
  
  // Recommendations
  doc.setFontSize(16)
  doc.setTextColor(255, 102, 0)
  doc.text('STRATEGIC RECOMMENDATIONS:', 20, 210)
  
  doc.setFontSize(10)
  doc.setTextColor(0, 0, 0)
  doc.text('• Optimize product pages for low-performing products based on BTDR', 25, 225)
  doc.text('• Implement automated emails for abandoned cart recovery', 25, 235)
  doc.text('• Simplify checkout process and offer guest checkout options', 25, 245)
  doc.text('• Focus on retention strategies with personalized content', 25, 255)
  
  return doc
}

export function generateGamingIndustryPDF() {
  const doc = new jsPDF()
  
  // Set font
  doc.setFont('helvetica')
  
  // Title
  doc.setFontSize(20)
  doc.setTextColor(255, 102, 0) // Orange color
  doc.text('VIDEO GAMES', 20, 30)
  doc.text('SALES ANALYSIS', 20, 45)
  
  doc.setFontSize(12)
  doc.setTextColor(0, 0, 0) // Black color
  doc.text('By: Abegail Fontanilla', 20, 65)
  
  // Objectives
  doc.setFontSize(16)
  doc.setTextColor(255, 102, 0)
  doc.text('OBJECTIVES:', 20, 85)
  
  doc.setFontSize(10)
  doc.setTextColor(0, 0, 0)
  const objectivesText = `Identify top-performing games, genres, and consoles; understand regional preferences and seasonal trends; track genre and console popularity shifts; and analyze the impact of critic scores on sales, using data up to February 2024.`
  
  const splitObjectives = doc.splitTextToSize(objectivesText, 170)
  doc.text(splitObjectives, 20, 100)
  
  // Top-Selling Games
  doc.setFontSize(16)
  doc.setTextColor(255, 102, 0)
  doc.text('TOP-SELLING GAMES GLOBALLY:', 20, 130)
  
  doc.setFontSize(10)
  doc.setTextColor(0, 0, 0)
  doc.text('Grand Theft Auto V and Call of Duty dominate global sales, with GTA V', 20, 145)
  doc.text('leading at $64.29 million. These franchises highlight a strong preference', 20, 152)
  doc.text('for open-world action and FPS games with multiplayer features.', 20, 159)
  
  // Regional Analysis
  doc.setFontSize(14)
  doc.setTextColor(255, 102, 0)
  doc.text('Regional Sales Analysis:', 20, 180)
  
  doc.setFontSize(10)
  doc.setTextColor(0, 0, 0)
  doc.text('• North America and Europe/Africa lead the market', 25, 195)
  doc.text('• Japan and other regions show different preferences', 25, 205)
  doc.text('• Regional marketing strategies needed for optimization', 25, 215)
  
  // Add new page
  doc.addPage()
  
  // Genre Distribution
  doc.setFontSize(16)
  doc.setTextColor(255, 102, 0)
  doc.text('GENRE DISTRIBUTION:', 20, 30)
  
  doc.setFontSize(10)
  doc.setTextColor(0, 0, 0)
  doc.text('Shooter and Action genres dominate the top-seller list, showing strong', 20, 45)
  doc.text('demand for FPS games and open-world action titles.', 20, 52)
  
  // Console Distribution
  doc.setFontSize(16)
  doc.setTextColor(255, 102, 0)
  doc.text('CONSOLE DISTRIBUTION:', 20, 75)
  
  doc.setFontSize(10)
  doc.setTextColor(0, 0, 0)
  doc.text('PlayStation and Xbox consoles lead in sales, particularly PS3, PS4,', 20, 90)
  doc.text('and Xbox 360, highlighting a strong user base on these platforms.', 20, 97)
  
  // Release Timing Impact
  doc.setFontSize(16)
  doc.setTextColor(255, 102, 0)
  doc.text('RELEASE TIMING IMPACT:', 20, 120)
  
  doc.setFontSize(10)
  doc.setTextColor(0, 0, 0)
  doc.text('Q4, especially November, shows a sales spike due to holiday shopping,', 20, 135)
  doc.text('making it an ideal release period for new games.', 20, 142)
  
  // Strategic Recommendations
  doc.setFontSize(16)
  doc.setTextColor(255, 102, 0)
  doc.text('STRATEGIC RECOMMENDATIONS:', 20, 165)
  
  doc.setFontSize(10)
  doc.setTextColor(0, 0, 0)
  doc.text('1. Focus on High-Quality Shooter and Action Games:', 20, 180)
  doc.text('   Develop for PlayStation and Xbox with Q4 releases', 25, 190)
  
  doc.text('2. Implement Targeted Regional Marketing:', 20, 205)
  doc.text('   Adapt strategies to regional preferences', 25, 215)
  
  doc.text('3. Diversify Genre Offerings:', 20, 230)
  doc.text('   Expand into RPGs, simulations, and strategy games', 25, 240)
  
  return doc
}
