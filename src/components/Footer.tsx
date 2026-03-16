const Footer = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 py-6 pb-24 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-3">
          <div className="text-2xl font-bold text-primary">ANG</div>
          <p className="text-sm text-muted-foreground text-center">
            © 2026 Anurag Gurubhetti. Built with passion and precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
