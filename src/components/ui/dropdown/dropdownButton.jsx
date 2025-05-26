export function DropdownButton({ children, ...props }) {
  return (
    <a class="block px-4 py-3 text-sm text-white" role="menuitem" tabindex="-1" id="menu-item-0" {...props}>
      {children}
    </a>
  );
}