import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "librenms 安裝與介紹",
  description: "介紹 snmp 管理系統 - LibreNMS",
  base: "/vitepress-librenms/",
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "臺中市教網宣導", link: "/tcedu/10-ncloud/" },
      { text: "LibreNMS", link: "/librenms/10-install-vbox/" },
      // { text: "Examples", link: "/markdown-examples" },
    ],
    sidebar: {
      "/tcedu/": [{ 
        text: "臺中市教網宣導",
        items: [
              { text: "ncloud 功能介紹", link: "/tcedu/10-ncloud/" },              
              { text: "網路測速", link: "/tcedu/20-iperf3/" }    
            ]
      }],
      "markdown-examples": [{ 
        text: "Examples",
        items: [
              { text: "Markdown Examples", link: "/markdown-examples" },
              { text: "Runtime API Examples", link: "/api-examples" },
            ],
        }],
      "/librenms/":[
        {
          text: "LibreNMS",
          items: [
            {
              text: "virtualbox 虛擬機環境設定",
              link: "/librenms/10-install-vbox/",
            },
            {
              text: "安裝 lubuntu 22.04",
              link: "/librenms/20-install-lubuntu/",
            },
            {
              text: "LinreNMS 安裝與使用",
              link: "/librenms/30-librenms/",
            },
            {
              text: "啟用交換器的 snmp 服務",
              link: "/librenms/100-enableSnmpd/",
            },
            {
              text: "加入裝置",
              link: "/librenms/40-add-devices/",
            },
            ,
            {
              text: "資訊看板",
              link: "/librenms/50-dashboard/",
            },
            {
              text: "警報",
              link: "/librenms/60-alert/",
            },
            {
              text: "Weathermap",
              link: "/librenms/70-weathermap/",
            },
          ],
        }],
      },

    // sidebar: [
    //   {
    //     text: "libnms",
    //     items: [
    //       {
    //         text: "virtualbox 虛擬機環境設定",
    //         link: "10-install-vbox/README.md",
    //       },
    //       { text: "安裝 lubuntu 22.04", link: "20-install-lubuntu/README.md" },
    //     ],
    //   },
    //   {
    //     text: "Examples",
    //     items: [
    //       { text: "Markdown Examples", link: "/markdown-examples" },
    //       { text: "Runtime API Examples", link: "/api-examples" },
    //     ],
    //   },
    // ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
