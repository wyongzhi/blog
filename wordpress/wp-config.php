<?php
/**
 * WordPress基础配置文件。
 *
 * 本文件包含以下配置选项：MySQL设置、数据库表名前缀、密钥、
 * WordPress语言设定以及ABSPATH。如需更多信息，请访问
 * {@link http://codex.wordpress.org/zh-cn:%E7%BC%96%E8%BE%91_wp-config.php
 * 编辑wp-config.php}Codex页面。MySQL设置具体信息请咨询您的空间提供商。
 *
 * 这个文件被安装程序用于自动生成wp-config.php配置文件，
 * 您可以手动复制这个文件，并重命名为“wp-config.php”，然后填入相关信息。
 *
 * @package WordPress
 */

// ** MySQL 设置 - 具体信息来自您正在使用的主机 ** //
/** WordPress数据库的名称 */
define('DB_NAME', 'wordpress');

/** MySQL数据库用户名 */
define('DB_USER', 'root');

/** MySQL数据库密码 */
define('DB_PASSWORD', '123456');

/** MySQL主机 */
define('DB_HOST', 'localhost');

/** 创建数据表时默认的文字编码 */
define('DB_CHARSET', 'utf8');

/** 数据库整理类型。如不确定请勿更改 */
define('DB_COLLATE', '');

/**#@+
 * 身份认证密钥与盐。
 *
 * 修改为任意独一无二的字串！
 * 或者直接访问{@link https://api.wordpress.org/secret-key/1.1/salt/
 * WordPress.org密钥生成服务}
 * 任何修改都会导致所有cookies失效，所有用户将必须重新登录。
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Ov7G34egN#bh:o5~ujqZXC|c8w/alc]zlV+L8t4haI,%6zPzqcVRtI}5>;S:nF%#');
define('SECURE_AUTH_KEY',  'y@WT0}3fg6e{n5zk_CPQg~}{+$avxr$b{0b.dN|{DXb;$B,9r3J2wD1!@%M1w-13');
define('LOGGED_IN_KEY',    '8#GQA*aVqA2< _c}Nun!Jy4Jk~p>2bo9uP~Y&TNww!3Epe]P3D+,l*eEr>hw5zPF');
define('NONCE_KEY',        'PqA.{_&%Rbwi]^cSiKwc#oP=}jR{Rroc)8FbZ8OMykL<Eb8G/.iqbQ2zQ~X#HeN$');
define('AUTH_SALT',        'xvw6YU?/#_pU`>n]SOo.&NJ2y%b,gx$Bw#lA/=KGqZoDbNVKwAqGgZy*7b]^mGm;');
define('SECURE_AUTH_SALT', '!|4js^Su:zSV+r9-bQB(H6~xsBGD<m1.K1ED_U73;6H)3?JnXR+ondL^/;Hg=x}s');
define('LOGGED_IN_SALT',   '+<|yOAWK5j?ecjnL4Z}wIk)y 0@{qU^O<_X[o9p*C&-!P9Z<U~|r9^<_xarR!.{k');
define('NONCE_SALT',       '2{VB,ZT@kd_.khLAFRj[~IU-~xdQ-GPe7E|K{3sgd[=|ST29%rVg](ILIEwib$xT');

/**#@-*/

/**
 * WordPress数据表前缀。
 *
 * 如果您有在同一数据库内安装多个WordPress的需求，请为每个WordPress设置
 * 不同的数据表前缀。前缀名只能为数字、字母加下划线。
 */
$table_prefix  = 'v56_';

/**
 * WordPress语言设置，中文版本默认为中文。
 *
 * 本项设定能够让WordPress显示您需要的语言。
 * wp-content/languages内应放置同名的.mo语言文件。
 * 例如，要使用WordPress简体中文界面，请在wp-content/languages
 * 放入zh_CN.mo，并将WPLANG设为'zh_CN'。
 */
define('WPLANG', 'zh_CN');

/**
 * 开发者专用：WordPress调试模式。
 *
 * 将这个值改为true，WordPress将显示所有用于开发的提示。
 * 强烈建议插件开发者在开发环境中启用WP_DEBUG。
 */
define('WP_DEBUG', false);

/* 好了！请不要再继续编辑。请保存本文件。使用愉快！ */

/** WordPress目录的绝对路径。 */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** 设置WordPress变量和包含文件。 */
require_once(ABSPATH . 'wp-settings.php');
