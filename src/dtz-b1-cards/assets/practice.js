(() => {
  function fallbackCopy(textarea) {
    textarea.focus();
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);
    return document.execCommand("copy");
  }

  async function copyPrompt(textarea) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(textarea.value);
      return true;
    }
    return fallbackCopy(textarea);
  }

  function setStatus(panel, message, isError = false) {
    const status = panel.querySelector(".practice-status");
    status.textContent = message;
    status.classList.toggle("is-error", isError);
  }

  async function handleCopy(panel) {
    const textarea = panel.querySelector(".practice-prompt");

    if (panel.dataset.emptyError && !textarea.value.trim()) {
      setStatus(panel, panel.dataset.emptyError, true);
      textarea.focus();
      return;
    }

    try {
      const copied = await copyPrompt(textarea);
      if (!copied) throw new Error("copy failed");
      setStatus(panel, panel.dataset.successCopy);
    } catch {
      const details = panel.querySelector(".practice-details");
      if (details) details.open = true;
      textarea.focus();
      textarea.select();
      setStatus(
        panel,
        panel.dataset.copyError,
        true,
      );
    }
  }

  document.querySelectorAll("[data-practice-panel]").forEach((panel) => {
    panel.querySelector(".practice-copy").addEventListener("click", () => {
      handleCopy(panel);
    });
  });
})();
