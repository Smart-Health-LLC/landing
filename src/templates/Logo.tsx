import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <img
        width={size}
        height={size}
        src="assets/images/logo/logo_transparent.svg"
        alt=""
      />

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
