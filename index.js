module.exports = function ({ types: t }) {
    return {
        visitor: {
            CallExpression(path, state) {
                const node = path.node;
                const args = node.arguments || [];
                const { from, to } = state.opts;
                if (from == null || to == null) {
                    console.error('babel-plugin-replace-require-suffix', 'require params from and to');
                    return;
                }
                if (node.callee.name === "require" && args.length === 1 && t.isStringLiteral(args[0])) {
                    const src = args[0].value;
                    if (src.endsWith('.' + from)) {
                        for (let i = src.length - 1; i >= 0; i--) {
                            if (src[i] === '.') {
                                args[0].value = src.substring(0, i) + '.' + to;
                                return;
                            }
                        }
                    }
                }
            }
        }
    };
}