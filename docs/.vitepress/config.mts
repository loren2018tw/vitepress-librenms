import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "librenms 安裝與介紹",
  description: "介紹 snmp 管理系統 - LibreNMS",
  base: "/vitepress-librenms/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
      { text: "LibreNMS", link: "/librenms/10-install-vbox/" },
    ],

    sidebar: {
      "/librenms/": [
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
          ],
        },
      ],
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
