import{_ as e,c as t,o as a,a as o}from"./app.e25e710b.js";const g=JSON.parse('{"title":"Quotas & limitations","description":"","frontmatter":{},"headers":[{"level":2,"title":"Managaing Quotas & API keys","slug":"managaing-quotas-api-keys","link":"#managaing-quotas-api-keys","children":[]}],"relativePath":"twitter/usage/quotas-and-limitations.md","lastUpdated":1686842988000}'),s={name:"twitter/usage/quotas-and-limitations.md"},i=o('<h1 id="quotas-limitations" tabindex="-1">Quotas &amp; limitations <a class="header-anchor" href="#quotas-limitations" aria-hidden="true">#</a></h1><p>We have the following limits/quota to abide by:</p><ol><li>This tool only scrapes tweets from <strong>the last 7 Days</strong></li><li>Scraped tweets are throttled to a limit of <strong>15,000 tweets per 15 minute interval</strong></li><li>There&#39;s a quota per month (on the free tier), so we can only scrape <strong>1,500 tweets per month</strong></li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This quota seems to be slow at updating, so you can try to push through scrapes as quickly as possible before it updates</p><p>There&#39;s no consequence for exceeding the quota, but you will be blocked from further scraping when it is maxed out</p></div><p>:::error the command line will output <code>[\u{1F438}/tscrape]: Error 404 - No tweets found.</code> if the quota has been maxed out. :::</p><h2 id="managaing-quotas-api-keys" tabindex="-1">Managaing Quotas &amp; API keys <a class="header-anchor" href="#managaing-quotas-api-keys" aria-hidden="true">#</a></h2><p>We have a DesignDev twitter developer account; login info and API keys stored on <a href="https://vault.zoho.com" target="_blank" rel="noreferrer">zoho</a>.</p><p>Log into the <a href="https://developer.twitter.com/en/portal/dashboard" target="_blank" rel="noreferrer">Developer Portal Dashboard</a> to monitor quota usage and API keys.</p><p>From here you can see:</p><ul><li>Quota limits</li><li>Number of tweets pulled so far this month/period</li><li>Date when usage quota will reset</li></ul>',10),r=[i];function n(l,u,p,d,h,c){return a(),t("div",null,r)}const _=e(s,[["render",n]]);export{g as __pageData,_ as default};
